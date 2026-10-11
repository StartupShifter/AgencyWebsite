"use client";

import { useState, type ReactNode } from "react";
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

const navigation = [
  { id: "overview", icon: LayoutGrid },
  { id: "brief", icon: BookOpen },
  { id: "journey", icon: Route },
  { id: "resources", icon: FolderOpen },
  { id: "agreement", icon: CreditCard },
] as const;
const navClass =
  "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d5fa43]";

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
      className="min-h-svh bg-[#e9ecef] p-2 text-[#242720] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-2 [&_button:focus-visible]:outline-[#677d19] sm:p-4 lg:p-6"
    >
      <a
        href="#dashboard-content"
        className="sr-only z-50 rounded-lg bg-[#d5fa43] p-3 text-black focus:not-sr-only focus:fixed focus:left-6 focus:top-6"
      >
        Skip to dashboard
      </a>
      <div className="mx-auto flex min-h-[calc(100svh-3rem)] max-w-[1600px] overflow-hidden rounded-[26px] bg-[#20231f] shadow-[0_16px_60px_-30px_#35403866]">
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
          className={`${mobileOpen ? "fixed inset-y-2 left-2 z-40 flex w-60 rounded-2xl" : "hidden"} shrink-0 flex-col overflow-y-auto bg-[#20231f] px-5 pb-6 pt-7 text-[#f6f8ef] lg:static lg:flex lg:w-[222px] xl:w-[238px]`}
        >
          <Link
            href="/"
            aria-label="Starter Shifter home"
            className="mb-10 flex items-center gap-2.5 px-1 text-[19px] font-semibold tracking-[-.8px]"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#d5fa43] text-[#20231f]">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </span>
            <span>
              starter<span className="font-normal text-[#c3c8bb]">shifter</span>
            </span>
          </Link>
          <div className="mb-6 rounded-xl border border-white/10 p-3">
            <div className="flex items-center gap-2 text-[11px] text-[#a7afa1]">
              <span className="size-1.5 rounded-full bg-[#d5fa43]" />
              Client workspace
            </div>
            <p
              className="mt-2 truncate text-sm font-medium"
              title={businessName}
            >
              {businessName}
            </p>
          </div>
          <nav className="space-y-1.5">
            {navigation.map(({ id, icon: Icon }) => (
              <button
                key={id}
                aria-current={view === id ? "page" : undefined}
                onClick={() => navigate(id)}
                className={`${navClass} ${view === id ? "bg-[#d5fa43] font-semibold text-[#20231f]" : "text-[#aeb5a7] hover:bg-white/5 hover:text-white"}`}
              >
                <Icon size={18} />
                {viewNames[id]}
                {view === id && (
                  <span className="ml-auto size-1.5 rounded-full bg-[#20231f]" />
                )}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-16">
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#2a2e27] p-4">
              <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-[#879176] text-[#d5fa43]">
                <CircleHelp size={18} />
              </div>
              <h2 className="text-sm font-medium">A little guidance?</h2>
              <p className="mb-4 mt-1.5 text-xs leading-relaxed text-[#aeb5a7]">
                Every next step, explained.
              </p>
              <button
                onClick={() => setHelpOpen(true)}
                className="flex items-center gap-2 text-xs font-medium text-[#d5fa43]"
              >
                Workspace guide
                <ArrowUpRight size={14} />
              </button>
            </div>
            {preview ? (
              <span className="px-4 text-[11px] text-[#aeb5a7]">
                Development preview
              </span>
            ) : (
              <button
                className={`${navClass} text-[#aeb5a7] hover:bg-white/5`}
                disabled={signingOut}
                onClick={() => void signOut()}
              >
                <LogOut size={17} />
                {signingOut ? "Signing out…" : "Sign out"}
              </button>
            )}
          </div>
        </aside>
        <div className="my-2 mr-2 min-w-0 flex-1 rounded-[20px] bg-[#f7f8fa] lg:my-3 lg:mr-3 lg:rounded-[24px]">
          <header className="flex min-h-[86px] flex-wrap items-center justify-between gap-3 border-b border-[#e9ebee] px-4 py-4 sm:px-7 xl:px-9">
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
              <div className="flex items-center gap-2 text-xs text-[#8a8e87]">
                <span className="hidden sm:inline">Workspace</span>
                <span className="hidden sm:inline">/</span>
                <span className="text-[#343a30]">{viewNames[view]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <label className="hidden items-center gap-2 rounded-full border border-[#e2e5df] bg-white px-3 py-2 md:flex">
                <Search size={15} className="text-[#777d70]" />
                <input
                  aria-label="Search your project brief"
                  type="search"
                  value={searchQuery}
                  placeholder="Search your brief…"
                  className="w-[138px] bg-transparent text-xs outline-none placeholder:text-[#92978c] focus:w-[160px]"
                  onChange={(event) => onSearch(event.target.value)}
                  disabled={loading}
                />
              </label>
              <button
                aria-label="View workspace updates"
                onClick={onUpdates}
                disabled={loading}
                className="rounded-full border border-[#e2e5df] bg-white p-2.5 hover:bg-[#edf1e6]"
              >
                <Bell size={16} />
              </button>
              <button
                aria-label="Open your profile"
                onClick={() => setAccountOpen(true)}
                className="flex items-center gap-2.5 rounded-full border border-[#e2e5df] bg-white py-1.5 pl-1.5 pr-3"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-[#e7e2f2] text-[11px] font-semibold">
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
          <footer className="mx-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#e6e9e2] py-5 text-[10px] text-[#858b7d] sm:mx-7 xl:mx-9">
            <span>Starter Shifter · Your business, connected.</span>
            <div className="flex items-center gap-4">
              {preview && <span>Development preview</span>}
              <Link href="/policies/onboarding-privacy">Project privacy</Link>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#6d956b]" />
                {loading ? "Connecting" : "Connected workspace"}
              </span>
            </div>
          </footer>
        </div>
      </div>
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogTitle>Your workspace guide</DialogTitle>
          <DialogDescription>
            Keep your project moving, one step at a time.
          </DialogDescription>
          <div className="space-y-4 text-sm leading-relaxed text-[#66705d]">
            <p>
              <strong className="text-[#242720]">Project brief</strong> holds
              every answer you have saved. Choose a topic to review it or return
              to onboarding to make changes.
            </p>
            <p>
              <strong className="text-[#242720]">Project journey</strong> shows
              your submission and verified prerequisites. Delivery stages become
              relevant after activation and follow your agreed scope.
            </p>
            <p>
              <strong className="text-[#242720]">Agreement & billing</strong>{" "}
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
            variant="lime"
          >
            Explore my brief
            <ArrowUpRight size={16} />
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={accountOpen} onOpenChange={setAccountOpen}>
        <DialogContent>
          <DialogTitle>Your profile</DialogTitle>
          <DialogDescription>
            {preview ? "Your saved preview workspace" : "Your client workspace"}
          </DialogDescription>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-[#79816f]">Name</dt>
              <dd className="mt-1 font-medium">{name || "Not provided yet"}</dd>
            </div>
            <div>
              <dt className="text-[#79816f]">Business</dt>
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
        <div className="mx-auto mb-4 size-10 animate-pulse rounded-full bg-[#d5fa43] motion-reduce:animate-none" />
        <h1 className="text-xl font-medium">Loading your workspace…</h1>
        <p className="mt-2 text-sm text-[#777f6c]">
          Getting your saved details and progress.
        </p>
      </div>
    </DashboardShell>
  );
}
