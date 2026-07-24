export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_45%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-950">
      <main>{children}</main>
    </div>
  );
}
