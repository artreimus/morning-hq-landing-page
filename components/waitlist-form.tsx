"use client";

import { submitWaitlistSignup, type WaitlistActionState } from "@/app/actions/waitlist";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialWaitlistState: WaitlistActionState = {
  status: "idle",
};

export function WaitlistForm() {
  const [state, formAction] = useActionState(submitWaitlistSignup, initialWaitlistState);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <AnimatePresence mode="wait">
        {state.status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            className="mx-auto max-w-xl border-t border-[var(--line)] pt-8 sm:pt-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#ecfdf5] text-[#10b981]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              You&apos;re on the list.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
              {state.message ?? "We&apos;ll reach out with early access details as the first cohort opens."}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            action={formAction}
            className="text-left"
          >
            {state.message ? (
              <p className="mb-6 rounded-2xl border border-[#f3c9b6] bg-[#fff4ed] px-4 py-3 text-sm text-[var(--accent-ink)]">
                {state.message}
              </p>
            ) : null}

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block space-y-1">
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Full name
                </span>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Alex Morgan"
                  aria-invalid={Boolean(state.fieldErrors?.fullName)}
                  className="w-full border-0 border-b border-[var(--line-strong)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] transition-colors"
                />
                {state.fieldErrors?.fullName ? (
                  <p className="text-sm text-[#b84e1e]">{state.fieldErrors.fullName[0]}</p>
                ) : null}
              </label>

              <label className="block space-y-1">
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Work email
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  aria-invalid={Boolean(state.fieldErrors?.email)}
                  className="w-full border-0 border-b border-[var(--line-strong)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] transition-colors"
                />
                {state.fieldErrors?.email ? (
                  <p className="text-sm text-[#b84e1e]">{state.fieldErrors.email[0]}</p>
                ) : null}
              </label>

              <label className="block space-y-1">
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Company
                </span>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme"
                  aria-invalid={Boolean(state.fieldErrors?.company)}
                  className="w-full border-0 border-b border-[var(--line-strong)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] transition-colors"
                />
                {state.fieldErrors?.company ? (
                  <p className="text-sm text-[#b84e1e]">{state.fieldErrors.company[0]}</p>
                ) : null}
              </label>

              <label className="block space-y-1">
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Role
                </span>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Head of Product"
                  aria-invalid={Boolean(state.fieldErrors?.role)}
                  className="w-full border-0 border-b border-[var(--line-strong)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] transition-colors"
                />
                {state.fieldErrors?.role ? (
                  <p className="text-sm text-[#b84e1e]">{state.fieldErrors.role[0]}</p>
                ) : null}
              </label>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4 text-sm leading-relaxed text-[var(--muted)]">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f8] text-[#db2777]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <p className="max-w-[280px]">
                  Early access only. No broadcast spam. Product notes when there&apos;s something worth reading.
                </p>
              </div>

              <SubmitButton />
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-semibold text-[var(--background)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        "Joining..."
      ) : (
        <>
          Join the waitlist
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}
