import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-md items-center px-6 py-16">
      <div className="w-full rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-xl shadow-slate-200/60 backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">Sign in</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Welcome back</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          This is the public auth entry point. Hook your API authentication here.
        </p>
        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500"
          />
          <button
            type="button"
            className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-600">
          Need an account?{" "}
          <Link href="/" className="font-medium text-slate-950 underline-offset-4 hover:underline">
            Return home
          </Link>
        </p>
      </div>
    </section>
  );
}
