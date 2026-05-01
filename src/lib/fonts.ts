import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

export const inter = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const syne = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
