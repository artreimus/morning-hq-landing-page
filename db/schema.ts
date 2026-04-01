import { index, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const waitlistSignups = pgTable(
  "waitlist_signups",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    email: text("email").notNull(),
    fullName: text("full_name").notNull(),
    company: text("company"),
    role: text("role"),
    source: text("source").default("landing-page").notNull(),
    notes: text("notes"),
    metadata: jsonb("metadata").$type<Record<string, string> | null>(),
  },
  (table) => [
    uniqueIndex("waitlist_signups_email_unique").on(table.email),
    index("waitlist_signups_created_at_idx").on(table.createdAt),
  ],
);

export type WaitlistSignup = typeof waitlistSignups.$inferSelect;
export type NewWaitlistSignup = typeof waitlistSignups.$inferInsert;
