import type { Metadata, Viewport } from "next";
import type React from "react";
import "@/app/globals.css";
import { Footer } from "@/components/sections";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: {
    default: "Software Development Company in Jaipur, India | BashGit Labs",
    template: "%s | BashGit Labs"
  },
  description:
    "BashGit Labs is a Jaipur, India based software development company for product engineering, AI-enabled workflows, backend systems, cloud platforms and reliability.",
  metadataBase: new URL("https://bashgit.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "website",
    url: "https://bashgit.com",
    siteName: "BashGit Labs",
    title: "Software Development Company in Jaipur, India | BashGit Labs",
    description:
      "Strategy-led software, AI, backend, cloud and reliability engineering for founders and product teams in Jaipur, India and beyond.",
    locale: "en_IN"
  },
  twitter: {
    card: "summary",
    title: "Software Development Company in Jaipur, India | BashGit Labs",
    description:
      "Strategy-led software, AI, backend, cloud and reliability engineering for founders and product teams in Jaipur, India and beyond."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StructuredData />
        <SmoothScroll />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
