import { CalendarRange, Link2, MessageSquareQuote, Sunrise, Workflow } from "lucide-react";

const capabilities = [
  {
    title: "Morning brief",
    description: "A ranked daily brief with priorities, context, and the first move drafted.",
    icon: Sunrise,
    colorClass: "bg-[#fee2e2] text-[#e11d48]",
  },
  {
    title: "Unified work graph",
    description: "Threads, tickets, meetings, and commitments linked into one view.",
    icon: Workflow,
    colorClass: "bg-[#fff7ed] text-[#ea580c]",
  },
  {
    title: "Prepared responses",
    description: "Drafts generated with the right context and held for human approval.",
    icon: MessageSquareQuote,
    colorClass: "bg-[#fef3c7] text-[#d97706]",
  },
  {
    title: "Meeting intelligence",
    description: "The meeting packet arrives with history, open risks, and next steps.",
    icon: CalendarRange,
    colorClass: "bg-[#ecfdf5] text-[#059669]",
  },
  {
    title: "Cross-tool memory",
    description: "MorningHQ remembers the thread across Slack, Jira, email, notes, and CRM.",
    icon: Link2,
    colorClass: "bg-[#f3e8ff] text-[#9333ea]",
  },
];

export function FeaturesSection() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-12">
      <div className="mb-20 max-w-4xl">
        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--surface-strong)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          What MorningHQ adds
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl leading-[1.1]">
          An operating layer that <br className="hidden sm:block" />
          reads the room before you do.
        </h2>
        <p className="mt-6 text-xl leading-relaxed text-[var(--muted)]">
          MorningHQ is not another place to manage work. It is the layer that understands the work already
          happening and reshapes it into something calm, brief, and actionable.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <div key={item.title} className="group relative">
            <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 ${item.colorClass}`}>
              <item.icon className="h-5 w-5 stroke-[2]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
            <p className="text-base leading-relaxed text-[var(--muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
