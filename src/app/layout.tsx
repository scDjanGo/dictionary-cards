
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Main_Header from "@/components/header/Main_Header";
import Main_Modals from "@/components/modals/Main_Modals";
import Sidebars_Container from "@/components/sidebars/Sidebars_Container";
import Main_Features from "@/features/features/Main_Features";
import { Analytics } from "@vercel/analytics/next";
import { Main_Metadata } from "@/meta/main-metadata";

export const metadata: Metadata = Main_Metadata;

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${roboto.className} bg-bgLight dark:bg-bgDark min-h-[100dvh]`}
      >
          <>
            {/* Features */}
            <Main_Features />
            <>
              {/* Ui elems */}
              <Sidebars_Container />
              <Main_Modals />
            </>
            {/* Header */}
            <Main_Header />
            <div
              id="main-container"
              className="max-w-7xl mx-auto !p-[60px_16px_16px_16px]"
            >
              {children}
              <Analytics />
            </div>
          </>
      </body>
    </html>
  );
}
