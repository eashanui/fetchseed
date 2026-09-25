import type { Metadata } from "next";
import "../src/styles.css";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://fetchseed.com"),
  title: {
    default: "Fetchseed - Technology, Intelligence, Growth",
    template: "%s | Fetchseed",
  },
  description:
    "Fetchseed Ltd is a UK-registered technology consultancy building offshore delivery and R&D centres in Sri Lanka, and driving digital transformation.",
  openGraph: {
    siteName: "Fetchseed",
    type: "website",
    title: "Fetchseed - Technology, Intelligence, Growth",
    description:
      "Offshore captive centres in Sri Lanka and digital transformation consulting, engineered end to end.",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
