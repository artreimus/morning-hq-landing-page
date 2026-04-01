"use server";

import { headers } from "next/headers";

import { getDb } from "@/db/client";
import { waitlistSignups } from "@/db/schema";
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

function isDatabaseError(error: unknown): error is Error & { code?: string } {
  return error instanceof Error;
}

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

  try {
    const requestHeaders = await headers();

    await getDb().insert(waitlistSignups).values({
      email: parsedValues.data.email,
      fullName: parsedValues.data.fullName,
      company: parsedValues.data.company ?? null,
      role: parsedValues.data.role ?? null,
      source: "landing-page",
      metadata: {
        referrer: requestHeaders.get("referer") ?? "",
        userAgent: requestHeaders.get("user-agent") ?? "",
      },
    });

    return {
      status: "success",
      message: "We'll reach out with early access details as the first cohort opens.",
    };
  } catch (error) {
    if (isDatabaseError(error) && error.code === "23505") {
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
}
