import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Main_Header from "@/components/header/Main_Header";
import Main_Modals from "@/components/modals/Main_Modals";
import Sidebars_Container from "@/components/sidebars/Sidebars_Container";
import Main_Features from "@/features/features/Main_Features";

export const metadata: Metadata = {
  title: "Cards",
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
    <html lang="ru">
      <body
        className={`${roboto.className} bg-bgLight dark:bg-bgDark min-h-[100dvh]`}
      >
        <AppRouterCacheProvider>
          <>
          {/* Features */}
          <Main_Features />
            <>
              {/* Ui elems */}
              <Sidebars_Container />
              <Main_Modals />
            </>
            <Main_Header />
            <div className="max-w-7xl mx-auto !p-[60px_16px_16px_16px]">{children}</div>
          </>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
