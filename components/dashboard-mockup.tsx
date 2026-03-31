"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, Mail, Focus } from "lucide-react";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-[var(--background)] shadow-2xl border border-[var(--line)]"
    >
      <div className="flex h-14 items-center gap-2 border-b border-[var(--line)] px-5">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>

      <div className="grid lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-[var(--line)] bg-[var(--surface-strong)]/30 p-6 lg:block">
          <p className="font-heading font-semibold text-[var(--foreground)] mb-8 ml-3 text-lg tracking-tight">Operator</p>
          <div className="space-y-1">
            {[
              { label: "Morning brief", icon: LayoutDashboard, active: true, activeClass: "bg-[#fff1f2] text-[#e11d48] shadow-sm", inactiveClass: "text-[#e11d48]/70 hover:bg-[#fff1f2]/50 hover:text-[#e11d48]" },
              { label: "Queued drafts", icon: Mail, active: false, activeClass: "bg-[#fef3c7] text-[#d97706] shadow-sm", inactiveClass: "text-[#d97706]/70 hover:bg-[#fef3c7]/50 hover:text-[#d97706]" },
              { label: "Focus mode", icon: Focus, active: false, activeClass: "bg-[#e0f2fe] text-[#0284c7] shadow-sm", inactiveClass: "text-[#0284c7]/70 hover:bg-[#e0f2fe]/50 hover:text-[#0284c7]" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  item.active
                    ? item.activeClass
                    : item.inactiveClass
                }`}
              >
                <item.icon className="h-4 w-4 stroke-[1.5]" />
                {item.label}
              </div>
            ))}
          </div>
        </aside>

        <div className="p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Tuesday, March 31</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">Good morning, Alex.</h2>
          <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
            Three priorities need attention before noon. Two drafts are prepared. Your focus window starts in one hour.
          </p>

          <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-8">
            <div className="flex items-center justify-between mb-4">
               <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Top Priority</p>
               <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Review renewal risks before the 10:00 sync.
            </h3>
            <p className="mt-4 text-[var(--muted)] max-w-2xl leading-relaxed">
              Customer sentiment dipped after yesterday's blocker call. A follow-up draft is ready, and the
              latest engineering notes are attached so you can lead with clarity.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-2.5 text-sm font-semibold text-[var(--background)] transition-transform hover:scale-105">
                Open Brief
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-strong)] px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-transform hover:scale-105">
                Review Drafts
              </button>
            </div>
          </div>
          
          <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-8">
             <div className="flex items-center gap-3 mb-2">
                 <CheckCircle2 className="h-5 w-5 text-[#10b981]" /> 
                 <p className="font-semibold text-[var(--foreground)]">Drafts Approved</p>
             </div>
             <p className="text-[var(--muted)] text-sm">3 replies ready for sending.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
