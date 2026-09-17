import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Shinrin Bonsai — Geduld, die wächst",
  description: "Bonsai mit Herz gezogen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
