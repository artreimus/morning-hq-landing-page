CREATE TABLE "waitlist_signups" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"email" text NOT NULL,
	"full_name" text NOT NULL,
	"company" text,
	"role" text,
	"source" text DEFAULT 'landing-page' NOT NULL,
	"notes" text,
	"metadata" jsonb
);
--> statement-breakpoint
CREATE UNIQUE INDEX "waitlist_signups_email_unique" ON "waitlist_signups" USING btree ("email");--> statement-breakpoint
CREATE INDEX "waitlist_signups_created_at_idx" ON "waitlist_signups" USING btree ("created_at");