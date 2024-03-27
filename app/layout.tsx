import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: shadesOfPurple
    }}>
      <html lang="en">
        <body className={cn("dark:bg-[#1e1e2e]", poppins.className)}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
