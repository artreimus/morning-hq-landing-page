"use server";

import { headers } from "next/headers";

import { supabase } from "@/lib/supabase";
import { waitlistSignupSchema } from "@/lib/waitlist-schema";

export type WaitlistFieldName = "fullName" | "email" | "company" | "role";

export type WaitlistActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<WaitlistFieldName, string[]>>;
};

function getFieldValue(formData: FormData, key: WaitlistFieldName) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

// PostgreSQL unique-violation error code surfaced by PostgREST / Supabase
const UNIQUE_VIOLATION_CODE = "23505";

export async function submitWaitlistSignup(
  _previousState: WaitlistActionState,
  formData: FormData,
): Promise<WaitlistActionState> {
  const parsedValues = waitlistSignupSchema.safeParse({
    fullName: getFieldValue(formData, "fullName"),
    email: getFieldValue(formData, "email"),
    company: getFieldValue(formData, "company"),
    role: getFieldValue(formData, "role"),
  });

  if (!parsedValues.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: parsedValues.error.flatten().fieldErrors,
    };
  }

  const requestHeaders = await headers();

  const { error } = await supabase.from("waitlist_signups").insert({
    email: parsedValues.data.email,
    full_name: parsedValues.data.fullName,
    company: parsedValues.data.company ?? null,
    role: parsedValues.data.role ?? null,
    source: "landing-page",
    metadata: {
      referrer: requestHeaders.get("referer") ?? "",
      userAgent: requestHeaders.get("user-agent") ?? "",
    },
  });

  if (error) {
    if (error.code === UNIQUE_VIOLATION_CODE) {
      return {
        status: "success",
        message: "That email is already on the list. We'll still reach out when access opens.",
      };
    }

    console.error("Failed to submit waitlist signup", error);

    return {
      status: "error",
      message: "We couldn't save your signup just now. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "We'll reach out with early access details as the first cohort opens.",
  };
}

