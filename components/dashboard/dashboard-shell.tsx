"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FolderOpen,
  LayoutGrid,
  LogOut,
  Menu,
  Route,
  Search,
  X,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { viewNames, type WorkspaceView } from "@/lib/onboarding/dashboard";

import "./dashboard.css";

const navigation = [
  { id: "overview", icon: LayoutGrid },
  { id: "brief", icon: BookOpen },
  { id: "journey", icon: Route },
  { id: "resources", icon: FolderOpen },
  { id: "agreement", icon: CreditCard },
] as const;
const navClass = "workspace-nav-button";

export function DashboardShell({
  children,
  name,
  businessName,
  view,
  onNavigate,
  onSearch,
  onUpdates,
  searchQuery = "",
  preview = false,
  loading = false,
}: {
  children: ReactNode;
  name: string;
  businessName: string;
  view: WorkspaceView;
  onNavigate: (view: WorkspaceView) => void;
  onSearch: (query: string) => void;
  onUpdates: () => void;
  searchQuery?: string;
  preview?: boolean;
  loading?: boolean;
}) {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [view]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState("");
  async function signOut() {
    setSigningOut(true);
    try {
      const result = await authClient.signOut();
      if (result.error)
        throw new Error("Unable to sign out. Please try again.");
      router.replace("/login");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to sign out.");
      setSigningOut(false);
    }
  }
  function navigate(next: WorkspaceView) {
    onNavigate(next);
    setMobileOpen(false);
  }
  return (
    <div
      onKeyDown={(event) => {
        if (event.key === "Escape") setMobileOpen(false);
      }}
      className="workspace-theme h-dvh w-full overflow-hidden bg-[var(--workspace-frame)] text-[var(--workspace-ink)]"
    >
      <a
        href="#dashboard-content"
        className="sr-only z-50 rounded-lg bg-white p-3 text-[var(--commerce-deep)] focus:not-sr-only focus:fixed focus:left-6 focus:top-6"
      >
        Skip to dashboard
      </a>
      <div className="flex h-full w-full overflow-hidden bg-[var(--workspace-frame)]">
        {mobileOpen && (
          <button
            aria-label="Close navigation"
            className="fixed inset-0 z-30 bg-black/45 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <aside
          id="workspace-navigation"
          aria-label="Workspace navigation"
          className={`workspace-sidebar ${mobileOpen ? "fixed inset-y-0 left-0 z-40 flex w-64" : "hidden"} h-full shrink-0 flex-col overflow-y-auto overscroll-contain px-5 py-5 text-white lg:static lg:flex lg:w-[242px] xl:w-[258px]`}
        >
          <Link
            href="/"
            aria-label="Starter Shifter home"
            className="mb-6 flex shrink-0 items-center gap-2.5 px-1 text-[19px] font-semibold tracking-[-.8px]"
          >
            <span className="flex size-9 items-center justify-center rounded-[11px_11px_3px_11px] bg-[var(--commerce-green)] text-white">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </span>
            <span>
              starter<span className="font-normal text-[#c4d0c9]">shifter</span>
            </span>
          </Link>
          <div className="mb-5 shrink-0 rounded-xl border border-white/10 p-3 [@media(max-height:640px)]:hidden">
            <div className="flex items-center gap-2 text-[11px] text-[#c0cac3]">
              <span className="size-1.5 rounded-full bg-[var(--commerce-mint)]" />
              Client workspace
            </div>
            <p
              className="mt-2 truncate text-sm font-medium"
              title={businessName}
            >
              {businessName}
            </p>
          </div>
          <nav className="shrink-0 space-y-1">
            {navigation.map(({ id, icon: Icon }) => (
              <button
                key={id}
                aria-current={view === id ? "page" : undefined}
                onClick={() => navigate(id)}
                className={navClass}
              >
                <span className="workspace-nav-icon"><Icon size={17} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1">{viewNames[id]}</span>
                <ArrowUpRight size={14} className="workspace-nav-arrow" aria-hidden="true" />
              </button>
            ))}
          </nav>
          <div className="mt-auto shrink-0 pt-4">
            <div className="relative mb-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 [@media(max-height:740px)]:hidden">
              <div className="mb-3 flex size-9 items-center justify-center rounded-xl border border-white/20 text-[var(--commerce-mint)]">
                <CircleHelp size={18} />
              </div>
              <h2 className="text-sm font-medium">A little guidance?</h2>
              <p className="mb-4 mt-1.5 text-xs leading-relaxed text-[#c0cac3]">
                Every next step, explained.
              </p>
              <button
                onClick={() => setHelpOpen(true)}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                Workspace guide
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </button>
            </div>
            <button
              onClick={() => setHelpOpen(true)}
              className={`${navClass} workspace-compact-guide`}
            >
              <span className="workspace-nav-icon"><CircleHelp size={17} /></span>
              Workspace guide
            </button>
            {preview ? (
              <span className="px-4 text-[11px] text-[#aeb5a7]">
                Development preview
              </span>
            ) : (
              <button
                className={`${navClass} disabled:opacity-50`}
                disabled={signingOut}
                onClick={() => void signOut()}
              >
                <span className="workspace-nav-icon"><LogOut size={17} /></span>
                {signingOut ? "Signing out…" : "Sign out"}
              </button>
            )}
          </div>
        </aside>
        <div className="m-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[24px] bg-[var(--workspace-surface)] sm:m-3 sm:rounded-[30px] lg:ml-0">
          <header className="flex min-h-[86px] shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[var(--workspace-line)] bg-white/70 px-4 py-4 sm:px-7 xl:px-9">
            <div className="flex items-center gap-3">
              <button
                className="rounded-lg p-2 hover:bg-black/5 lg:hidden"
                aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={mobileOpen}
                aria-controls="workspace-navigation"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div className="flex items-center gap-2 text-xs text-[var(--workspace-muted)]">
                <span className="hidden sm:inline">Workspace</span>
                <span className="hidden sm:inline">/</span>
                <span className="text-[var(--workspace-ink)]">{viewNames[view]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <label className="hidden h-10 items-center gap-2 rounded-full border border-[var(--workspace-line)] bg-white px-3 md:flex">
                <Search size={15} className="text-[var(--workspace-muted)]" />
                <input
                  aria-label="Search your project brief"
                  type="search"
                  value={searchQuery}
                  placeholder="Search your brief…"
                  className="w-[148px] min-w-0 bg-transparent text-xs outline-none placeholder:text-[var(--workspace-muted)]"
                  onChange={(event) => onSearch(event.target.value)}
                  disabled={loading}
                />
              </label>
              <button
                aria-label="View workspace updates"
                onClick={onUpdates}
                disabled={loading}
                className="flex size-10 items-center justify-center rounded-full border border-[var(--workspace-line)] bg-white transition-colors hover:bg-[var(--workspace-soft)]"
              >
                <Bell size={16} />
              </button>
              <button
                aria-label="Open your profile"
                onClick={() => setAccountOpen(true)}
                className="flex h-10 items-center gap-2.5 rounded-full border border-[var(--workspace-line)] bg-white py-1 pl-1 pr-3 transition-colors hover:bg-[var(--workspace-soft)]"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-[var(--commerce-deep)] text-[11px] font-semibold text-white">
                  {name
                    .trim()
                    .split(/\s+/)
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase() || "SS"}
                </span>
                <span className="hidden max-w-28 truncate text-xs font-medium sm:block">
                  {name || "Your account"}
                </span>
                <ChevronDown size={13} />
              </button>
            </div>
          </header>
          <div
            ref={contentRef}
            id="dashboard-scroll-area"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
            aria-label="Dashboard tab content"
            tabIndex={0}
          >
            {error && (
              <p
                role="alert"
                className="mx-6 mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-800"
              >
                {error}
              </p>
            )}
            <main
              id="dashboard-content"
              className="px-4 pb-8 pt-6 sm:px-7 xl:px-9"
            >
              {children}
            </main>
            <footer className="mx-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--workspace-line)] py-5 text-[10px] text-[var(--workspace-muted)] sm:mx-7 xl:mx-9">
              <span>Starter Shifter · Your business, connected.</span>
              <div className="flex items-center gap-4">
                {preview && <span>Development preview</span>}
                <Link href="/policies/onboarding-privacy">Project privacy</Link>
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[var(--commerce-green)]" />
                  {loading ? "Connecting" : "Connected workspace"}
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="workspace-theme sm:max-w-lg">
          <DialogTitle>Your workspace guide</DialogTitle>
          <DialogDescription>
            Keep your project moving, one step at a time.
          </DialogDescription>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--workspace-muted)]">
            <p>
              <strong className="text-[var(--workspace-ink)]">Project brief</strong> holds
              every answer you have saved. Choose a topic to review it or return
              to onboarding to make changes.
            </p>
            <p>
              <strong className="text-[var(--workspace-ink)]">Project journey</strong> shows
              your submission and verified prerequisites. Delivery stages become
              relevant after activation and follow your agreed scope.
            </p>
            <p>
              <strong className="text-[var(--workspace-ink)]">Agreement & billing</strong>{" "}
              shows the agency’s recorded scope, fees, agreement, and advance
              verification.
            </p>
            <p>
              Use “Discuss with us” in your brief to flag anything you need help
              with. Your flags appear in the dashboard’s action center.
            </p>
          </div>
          <Button
            onClick={() => {
              setHelpOpen(false);
              navigate("brief");
            }}
            variant="emerald"
          >
            Explore my brief
            <ArrowUpRight size={16} />
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={accountOpen} onOpenChange={setAccountOpen}>
        <DialogContent className="workspace-theme">
          <DialogTitle>Your profile</DialogTitle>
          <DialogDescription>
            {preview ? "Your saved preview workspace" : "Your client workspace"}
          </DialogDescription>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-[var(--workspace-muted)]">Name</dt>
              <dd className="mt-1 font-medium">{name || "Not provided yet"}</dd>
            </div>
            <div>
              <dt className="text-[var(--workspace-muted)]">Business</dt>
              <dd className="mt-1 font-medium">{businessName}</dd>
            </div>
          </dl>
          <Button
            variant="outline"
            onClick={() => {
              setAccountOpen(false);
              navigate("brief");
            }}
          >
            View contact details
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function DashboardLoading({ preview = false }: { preview?: boolean }) {
  return (
    <DashboardShell
      name=""
      businessName="Your project workspace"
      view="overview"
      onNavigate={() => {}}
      onSearch={() => {}}
      onUpdates={() => {}}
      preview={preview}
      loading
    >
      <div role="status" className="py-20 text-center">
        <div className="mx-auto mb-4 size-10 animate-pulse rounded-full bg-[var(--commerce-green)] motion-reduce:animate-none" />
        <h1 className="text-xl font-medium">Loading your workspace…</h1>
        <p className="mt-2 text-sm text-[var(--workspace-muted)]">
          Getting your saved details and progress.
        </p>
      </div>
    </DashboardShell>
  );
}
