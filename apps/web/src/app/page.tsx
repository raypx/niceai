import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  FileText,
  GitPullRequest,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const workspaceSignals = [
  { label: "Active brief", value: "Launch readiness", icon: FileText },
  { label: "Open threads", value: "12 conversations", icon: MessageSquare },
  { label: "Tracked runs", value: "4 in progress", icon: Blocks },
];

const focusItems = [
  {
    title: "Decision captured",
    detail: "Keep onboarding in the chat-first path",
    tone: "border-accent bg-accent text-accent-foreground",
    icon: CheckCircle2,
  },
  {
    title: "Risk surfaced",
    detail: "OAuth return flow needs mobile verification",
    tone: "border-amber-500/30 bg-amber-500/10 text-amber-700",
    icon: Sparkles,
  },
  {
    title: "Next action",
    detail: "Promote restored drafts into persisted messages",
    tone: "border-primary/25 bg-primary/10 text-primary",
    icon: GitPullRequest,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
        <div className="mesh-orb mesh-orb-4" />
      </div>

      <div className="relative z-10 pt-16">
        <section aria-label="Hero" className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
            <div className="space-y-7">
              <div className="space-y-5">
                <span className="inline-flex items-center rounded-md border border-accent bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  AI workspace management
                </span>
                <h1 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-tight text-balance text-foreground md:text-6xl">
                  Talk to your workspace.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-balance text-muted-foreground md:text-xl">
                  Niceai turns scattered conversations, docs, and project state into clear next
                  actions.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {workspaceSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <div
                      className="rounded-lg border border-border/80 bg-card/70 px-3 py-3"
                      key={signal.label}
                    >
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="size-3.5" />
                        {signal.label}
                      </div>
                      <p className="mt-2 text-sm font-medium">{signal.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2.5 rounded-full bg-accent-foreground" />
                    <span className="text-sm font-medium">Start with a real question</span>
                  </div>
                </div>
                <div className="min-h-36 p-4 text-base text-muted-foreground">
                  Ask Niceai what changed, what is blocked, or what to do next...
                </div>
                <div className="flex flex-col gap-3 border-t border-border px-3 py-3" />
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  href="#"
                >
                  Open workspace
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex h-12 items-center rounded-md border border-border/70 bg-card px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-acent"
                  href="#"
                >
                  Read the Docs
                </a>
              </div>
            </div>

            <aside className="mt-0 rounded-lg border border-border bg-card/80 p-4 shadow-sm lg:mt-12">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Workspace pulse</p>
                  <h2 className="mt-1 text-lg font-medium">Product launch room</h2>
                </div>
                <span className="inline-flex items-center rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  Live mock
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {focusItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="rounded-lg border border-border p-3" key={item.title}>
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex size-8 shrink-0 items-center justify-center rounded-md border ${item.tone}`}
                        >
                          <Icon className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="mt-1 text-sm leading-5 text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-lg border border-border p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium">Suggested next run</span>
                  <span className="text-xs text-muted-foreground">2 min</span>
                </div>
                <p className="text-sm leading-5 text-muted-foreground">
                  Compare launch notes, support threads, and roadmap changes. Return blockers,
                  owners, and a Friday-ready summary.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <footer
          aria-label="Site footer"
          className="relative z-10 border-t border-border/50 py-12 md:py-16"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-bold tracking-tighter">niceai</span>
              <p className="max-w-xs text-sm text-muted-foreground">
                AI-powered workspace management. Built for modern teams.
              </p>
              <div className="mt-2 text-sm text-muted-foreground/80">
                &copy; {new Date().getFullYear()} Niceai. All rights reserved.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold tracking-tight">Product</h3>
                <span className="text-sm text-muted-foreground">Documentation</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold tracking-tight">Company</h3>
                <span className="text-sm text-muted-foreground">About</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold tracking-tight">Legal</h3>
                <span className="text-sm text-muted-foreground">Privacy</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
