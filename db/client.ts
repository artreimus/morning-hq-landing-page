import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const globalForDb = globalThis as typeof globalThis & {
  db?: ReturnType<typeof drizzle>;
  postgresClient?: ReturnType<typeof postgres>;
};

export function getDb() {
  if (globalForDb.db) {
    return globalForDb.db;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Add it to .env.local before submitting waitlist signups.");
  }

  const postgresClient =
    globalForDb.postgresClient ??
    (() => {
      const parsed = new URL(connectionString);
      const isLocal = parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";

      return postgres(connectionString, {
        // Supabase transaction poolers do not support prepared statements.
        prepare: false,
        ...(isLocal ? {} : { ssl: "require" as const }),
      });
    })();

  const db = drizzle({ client: postgresClient });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.postgresClient = postgresClient;
    globalForDb.db = db;
  }

  return db;
}
