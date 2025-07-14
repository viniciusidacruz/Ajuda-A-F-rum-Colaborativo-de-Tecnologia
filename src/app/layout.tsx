import Link from "next/link";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";

import { METADATA } from "@/shared/constants";
import { Header } from "@/shared/components/internal";
import { Button } from "@/shared/components/external";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        <NuqsAdapter>
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Link href="/perguntar">
              <Button type="button" className="w-full mb-8 block md:hidden">
                Fazer pergunta
              </Button>
            </Link>
            {children}
          </main>
        </NuqsAdapter>
      </body>
    </html>
  );
}
