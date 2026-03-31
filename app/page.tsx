import { DashboardMockup } from "@/components/dashboard-mockup";
import { FeaturesSection } from "@/components/features-section";
import { WaitlistForm } from "@/components/waitlist-form";
import { Logo } from "@/components/logo";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--background)]/80 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center">
              <Logo className="h-8 w-8 text-[var(--foreground)]" />
            </div>
            <p className="font-heading text-lg font-bold tracking-tight">MorningHQ</p>
          </div>
          
          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
            <a href="#features" className="hover:text-[var(--foreground)] transition-colors">Product</a>
            <a href="#workflow" className="hover:text-[var(--foreground)] transition-colors">Workflow</a>
          </nav>
          
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-transform hover:scale-105"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="sunrise-gradient mx-auto w-full max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-12 flex flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          A calmer operating system for mornings
        </div>
        
        <h1 className="max-w-5xl font-heading text-6xl font-semibold tracking-tight text-[var(--foreground)] sm:text-8xl lg:text-[7.5rem] leading-[1.05]">
          Start clear.
          <br />
          Stay in <span className="editorial-accent aurora-text">deep work.</span>
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          MorningHQ prepares the day before the noise arrives. It turns inbox drift, Slack fragments,
          meeting prep, and action follow-up into one decisive brief.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-medium text-[var(--background)] transition-transform hover:scale-105"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="w-full bg-[var(--surface-strong)] py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
          <DashboardMockup />
        </div>
      </section>

      {/* Features Section */}
      <div id="features" className="w-full border-y border-[var(--line)]">
        <FeaturesSection />
      </div>

      {/* Deep Work Section */}
      <section id="workflow" className="w-full bg-[var(--sky-indigo)] text-[var(--surface)]">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[var(--sky-violet)] bg-[var(--sky-violet)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--highlight)]">
                Protected Focus
              </div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl text-[var(--surface)]">
                 Deep work, <br/> without disappearing.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c6b6d6] sm:text-xl">
                MorningHQ prepares replies, meeting context, and follow-up drafts before you focus. 
                The result is a work session with fewer interruptions and less fear that something critical is going stale.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "Pause low-signal Slack interruptions while preserving critical escalation paths.",
                  "Open meetings with the current account, ticket, and commitment context already compiled.",
                  "Convert engineering detail into client-safe language automatically.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--surface)]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-base text-[#c6b6d6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="overflow-hidden rounded-[2rem] border border-[var(--sky-violet)] bg-[#241b3d] p-8 lg:p-12 shadow-2xl">
              <p className="font-heading text-xl font-semibold text-[var(--surface)]">Focus session active</p>
              <p className="mt-1 text-sm text-[var(--surface-strong)]/60">08:30 to 10:00</p>
              
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--surface-strong)]/60">Interruptions held</p>
                  <p className="mt-2 text-5xl font-semibold text-[var(--highlight)]">14</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--surface-strong)]/60">Drafts prepared</p>
                  <p className="mt-2 text-5xl font-semibold text-[var(--highlight)]">03</p>
                </div>
              </div>
              
              <div className="mt-10 border-t border-[var(--sky-violet)] pt-8 space-y-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--surface-strong)]/60">Focus Sequence</p>
                <div className="text-base text-[#c6b6d6] space-y-4">
                  <div className="flex gap-4"><span className="text-[var(--highlight)] font-semibold">01</span><p>Renewal sync brief assembled.</p></div>
                  <div className="flex gap-4"><span className="text-[var(--highlight)] font-semibold">02</span><p>Engineering responses drafted.</p></div>
                  <div className="flex gap-4"><span className="text-[var(--highlight)] font-semibold">03</span><p>Status review reserved for 10:05.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full bg-[var(--surface-strong)] py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
            Start the day with <span className="editorial-accent aurora-text">clarity.</span>
          </h2>
          <p className="mx-auto mt-6 text-lg text-[var(--muted)] sm:text-xl">
            Join the waitlist for early access. Built for teams who spend too
            much of the morning reconstructing context instead of moving the real work.
          </p>
          <div className="mt-12 bg-[var(--background)] p-8 rounded-[2rem] shadow-sm border border-[var(--line)]">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[var(--line)] bg-[var(--background)] px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6 text-[var(--foreground)]" />
            <p className="font-heading font-semibold text-[var(--foreground)]">MorningHQ</p>
          </div>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="#" className="hover:text-[var(--foreground)]">Twitter</a>
            <a href="#" className="hover:text-[var(--foreground)]">Privacy</a>
            <a href="#" className="hover:text-[var(--foreground)]">Terms</a>
          </div>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} MorningHQ. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

