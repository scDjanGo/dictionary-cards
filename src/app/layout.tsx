import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import StoreProvider from "./StoreProvider";
import Main_Header from "@/components/Main_Header";

export const metadata: Metadata = {
  title: "dictionary-cards",
  description: "Made by scDjanGo",
};

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
    <html lang="en" className={roboto.className}>
      <body className="">
        <StoreProvider>
          <AppRouterCacheProvider>
            <>
              <Main_Header />
              <div className="!p-[88px_16px_16px_16px]">{children}</div>
            </>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
