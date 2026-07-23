import Link from "next/link";

export default function PublicHomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl items-center px-6 py-16">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-emerald-700">
          Public area
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Build and manage polls with a clean product shell.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          This public section is for discovery, onboarding, and authentication. The app area will host
          the authenticated product experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/login"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Go to login
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
          >
            Preview dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
