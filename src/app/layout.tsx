import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { inter, jetbrainsMono, syne } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { VibeThemeProvider } from "@/context/VibeThemeContext";
import { FloatingVibeToggle } from "@/components/interactive/FloatingVibeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krenil Patel — Full Stack Engineer",
  description:
    "Full Stack Software Engineer with 2.5+ years of experience. Specializing in Angular, React, .NET Core, and Microsoft Azure. Microsoft Certified AI & Cloud professional based in Vadodara, India.",
  keywords: [
    "Krenil Patel",
    "Full Stack Engineer",
    "React",
    "Angular",
    ".NET Core",
    "Azure",
    "AI",
    "Software Engineer",
    "Vadodara",
    "LabelFlow",
  ],
  authors: [{ name: "Krenil Patel", url: "https://github.com/krenilpatel11" }],
  creator: "Krenil Patel",
  openGraph: {
    title: "Krenil Patel — Full Stack Engineer",
    description: "I build scalable apps, AI-powered tools, and beautiful interfaces.",
    url: "https://krenilpatel.dev",
    siteName: "Krenil Patel",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krenil Patel — Full Stack Engineer",
    description: "I build scalable apps, AI-powered tools, and beautiful interfaces.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <VibeThemeProvider>
            <SmoothScrollProvider>
              {children}
              <FloatingVibeToggle />
            </SmoothScrollProvider>
          </VibeThemeProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
