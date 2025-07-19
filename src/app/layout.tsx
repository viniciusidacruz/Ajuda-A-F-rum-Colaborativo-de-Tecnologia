import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";

import { METADATA } from "@/shared/constants";
import { Providers } from "@/shared/providers";
import { Header, Sidebar, SubHeader } from "@/shared/components/internal";

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
        <Providers>
          <NuqsAdapter>
            <Header />

            <div className="mt-8 flex container mx-auto px-4 gap-4">
              <Sidebar />

              <main className="md:px-4 w-full">
                <SubHeader />

                {children}
              </main>
            </div>
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}
