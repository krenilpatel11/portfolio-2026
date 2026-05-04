import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { inter, jetbrainsMono, syne } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { VibeThemeProvider } from "@/context/VibeThemeContext";
import { FloatingVibeToggle } from "@/components/interactive/FloatingVibeToggle";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://krenilpatel.dev'),
  title: {
    default: "Krenil Patel — Full Stack Engineer | React, Angular, .NET Core, Azure",
    template: "%s | Krenil Patel"
  },
  description:
    "Full Stack Software Engineer with 3+ years of experience building scalable web applications. Specializing in Angular, React, .NET Core, and Microsoft Azure. Microsoft Certified AI & Cloud professional. Founder of LabelFlow Digital Agency. Based in Vadodara, India.",
  keywords: [
    "Krenil Patel",
    "Full Stack Developer",
    "Full Stack Engineer",
    "React Developer",
    "Angular Developer",
    ".NET Core Developer",
    "Azure Developer",
    "Microsoft Certified",
    "AI Engineer",
    "Cloud Engineer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "C# Developer",
    "Vadodara Software Engineer",
    "India Software Developer",
    "LabelFlow",
    "Digital Agency",
    "UI/UX Designer",
    "Azure AI",
    "Azure Certified",
  ],
  authors: [{ name: "Krenil Patel", url: "https://krenilpatel.dev" }],
  creator: "Krenil Patel",
  publisher: "Krenil Patel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krenilpatel.dev",
    siteName: "Krenil Patel - Full Stack Engineer",
    title: "Krenil Patel — Full Stack Engineer | React, Angular, .NET Core, Azure",
    description: "Full Stack Software Engineer specializing in building scalable web applications with React, Angular, .NET Core, and Azure. Microsoft Certified AI & Cloud professional. Founder of LabelFlow Digital Agency.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krenil Patel - Full Stack Engineer",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@krenilpatel",
    creator: "@krenilpatel",
    title: "Krenil Patel — Full Stack Engineer | React, Angular, .NET Core, Azure",
    description: "Full Stack Software Engineer specializing in building scalable web applications. Microsoft Certified AI & Cloud professional. Founder of LabelFlow Digital Agency.",
    images: ["/twitter-image.png"],
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://krenilpatel.dev",
  },
  category: "Technology",
  classification: "Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krenil Patel",
    url: "https://krenilpatel.dev",
    image: "https://krenilpatel.dev/og-image.png",
    sameAs: [
      "https://github.com/krenilpatel11",
      "https://linkedin.com/in/krenilpatel",
      "https://www.behance.net/krenilpatel2",
      "https://labelflow.store",
    ],
    jobTitle: "Full Stack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "LabelFlow Digital Agency",
      url: "https://labelflow.store"
    },
    knowsAbout: [
      "React",
      "Angular",
      "Next.js",
      ".NET Core",
      "TypeScript",
      "JavaScript",
      "Azure",
      "Cloud Computing",
      "Artificial Intelligence",
      "Web Development",
      "Full Stack Development",
      "UI/UX Design"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Parul University"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "India"
    },
    email: "patelkrenil150@gmail.com",
    description: "Full Stack Software Engineer with 3+ years of experience building scalable web applications. Microsoft Certified AI & Cloud professional. Founder of LabelFlow Digital Agency."
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
