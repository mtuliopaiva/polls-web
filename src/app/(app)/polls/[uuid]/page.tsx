export default async function PollDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ uuid: string }>;
}>) {
  const { uuid } = await params;

  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Poll details</h1>
      <p className="mt-3 text-slate-300">Poll id: {uuid}</p>
    </section>
  );
}
