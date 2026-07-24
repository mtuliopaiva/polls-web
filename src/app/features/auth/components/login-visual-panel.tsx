import { BarChart3 } from "lucide-react";

const results = [
  {
    label: "React",
    value: 48,
  },
  {
    label: "Vue",
    value: 27,
  },
  {
    label: "Angular",
    value: 15,
  },
];

export function LoginVisualPanel() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-primary px-12 py-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-24 size-72 rounded-full bg-primary-foreground/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 right-0 size-96 rounded-full bg-primary-foreground/10 blur-3xl"
      />

      <div className="relative flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground text-primary">
          <BarChart3 className="size-5" />
        </div>

        <span className="text-lg font-semibold tracking-tight">Polls</span>
      </div>

      <div className="relative max-w-xl py-4">
        <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
          Transforme opiniões em decisões.
        </h1>

        <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/75 xl:text-lg">
          Crie enquetes, acompanhe os resultados e visualize cada voto sendo
          contabilizado instantaneamente.
        </p>

        <div className="mt-10 max-w-lg rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-primary-foreground/65">
                Enquete em destaque
              </p>

              <h2 className="mt-1 font-medium">Qual framework você prefere?</h2>
            </div>

            <span className="rounded-full bg-primary-foreground/10 px-2.5 py-1 text-xs">
              124 votos
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {results.map((result) => (
              <div key={result.label}>
                <div className="flex items-center justify-between text-sm">
                  <span>{result.label}</span>
                  <span className="font-medium">{result.value}%</span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-primary-foreground/15">
                  <div
                    className="h-full rounded-full bg-primary-foreground"
                    style={{
                      width: `${result.value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="relative text-sm text-primary-foreground/55">
        Crie. Compartilhe. Decida.
      </p>
    </section>
  );
}
