import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head"; // Import the Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xxanxnie.github.io/"),
  alternates: {
    canonical: "https://xxanxnie.github.io/",
  },
  title: "Annie Xu",
  description:
    "Annie's Profolio.",
  keywords:
    "Alexander Meikopoulos, Product Designer, AI, Web3, Finance, User Experience, UI/UX Design, Design Systems, Front-end Development, Decentralized Finance, DeFi, Swoop Exchange, Vela Exchange, Stealth AI Startup, Technology, Innovation, Human-Centered Design",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
