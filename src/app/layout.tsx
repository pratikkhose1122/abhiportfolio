import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhijit Mungase | Software Developer",
  description: "Boutique Dev Studio by Abhijit Mungase.",
};

import { AppClientWrapper } from "@/components/AppClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans antialiased selection:bg-accent-blue/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppClientWrapper>
            <Navbar />
            <main className="flex-1 flex flex-col relative pt-24 pb-16">
              {children}
            </main>
            <Footer />
          </AppClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
