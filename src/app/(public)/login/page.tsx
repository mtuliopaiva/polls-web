import type { Metadata } from "next";
import { LoginForm } from "../../features/auth/components/login-form";
import { LoginVisualPanel } from "../../features/auth/components/login-visual-panel";

export const metadata: Metadata = {
  title: "Entrar | Polls",
  description: "Acesse a plataforma de enquetes.",
};

export default function LoginPage() {
  return (
    <main className="grid min-h-svh bg-background lg:grid-cols-[1.1fr_0.9fr]">
      <LoginVisualPanel />

      <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
        <LoginForm />
      </section>
    </main>
  );
}
