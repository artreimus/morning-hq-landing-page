create table "public"."waitlist_signups" (
  "id" uuid primary key default gen_random_uuid() not null,
  "created_at" timestamp with time zone default now() not null,
  "email" text not null,
  "full_name" text not null,
  "company" text,
  "role" text,
  "source" text default 'landing-page' not null,
  "notes" text,
  "metadata" jsonb
);

create unique index "waitlist_signups_email_unique"
on "public"."waitlist_signups" using btree ("email");

create index "waitlist_signups_created_at_idx"
on "public"."waitlist_signups" using btree ("created_at");
