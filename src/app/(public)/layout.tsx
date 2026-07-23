import Link from "next/link";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_45%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-950">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
          Polls
        </Link>
        <Link
          href="/login"
          className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white"
        >
          Login
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
