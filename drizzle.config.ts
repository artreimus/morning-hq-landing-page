import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const migrationUrl = process.env.MIGRATION_DATABASE_URL?.trim();
const databaseUrl = process.env.DATABASE_URL?.trim();
const rawUrl =
  (migrationUrl && migrationUrl.length > 0 ? migrationUrl : undefined) ??
  (databaseUrl && databaseUrl.length > 0 ? databaseUrl : undefined) ??
  "postgresql://postgres:postgres@127.0.0.1:5432/postgres";

function normalizeDatabaseUrl(url: string) {
  const parsed = new URL(url);
  const isLocal = parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";

  if (!isLocal && !parsed.searchParams.has("sslmode")) {
    parsed.searchParams.set("sslmode", "require");
  }

  return parsed.toString();
}

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: normalizeDatabaseUrl(rawUrl),
  },
});
