import type { Metadata, Viewport } from "next";
import type React from "react";
import "@/app/globals.css";
import { Footer } from "@/components/sections";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: {
    default: "BashGit Labs - Premium Software Engineering Consultancy",
    template: "%s | BashGit Labs"
  },
  description:
    "BashGit Labs designs, builds and operates reliable product engineering, backend, cloud infrastructure, DevOps and observability systems.",
  metadataBase: new URL("https://bashgit.com")
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScroll />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
