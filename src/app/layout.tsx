import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conviction Infinite OS - MVP",
  description: "Sistema SaaS de gestión logística y ruteo para empresas de transporte en Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased h-screen overflow-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
