import { z } from "zod";

const optionalTextField = z
  .string()
  .trim()
  .max(120, "Must be 120 characters or fewer.")
  .optional()
  .transform((value) => (value && value.length > 0 ? value : undefined));

export const waitlistSignupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(120, "Must be 120 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid work email.")
    .transform((value) => value.toLowerCase()),
  company: optionalTextField,
  role: optionalTextField,
});

export type WaitlistSignupInput = z.infer<typeof waitlistSignupSchema>;
