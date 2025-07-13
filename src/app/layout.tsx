import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ajuda Aí – Fórum Colaborativo de Tecnologia",
  description:
    "Plataforma colaborativa para a comunidade tech tirar dúvidas, compartilhar conhecimento e evoluir juntos. Filtre por tecnologia, região, data e mais. Inspirado no StackOverflow, feito para o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
