import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hora Útil 360 — Gestão Operacional de Frotas",
  description:
    "Gestão total de abastecimento, manutenção e pessoas numa única plataforma digital. Visão 360°, 100% digital e monitoramento em tempo real.",
  openGraph: {
    title: "Hora Útil 360 — Gestão Operacional de Frotas",
    description:
      "A inteligência operacional que a sua frota precisa. Plataforma 100% digital para gestão de frotas.",
    url: "https://horautil360.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
