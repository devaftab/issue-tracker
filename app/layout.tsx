import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";
import { ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import "./theme-config.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={inter.variable}
      >
        <Theme accentColor="violet" radius="large">
          <NavBar />
          <main className='px-5'>{children}</main>
        <ThemePanel/>
        </Theme>
        
      </body>
    </html>
  );
}
