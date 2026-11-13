import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: { default: "The Idea Brands | Dubai Brand Production", template: "%s | The Idea Brands" },
  description: "Dubai brand production since 2015: signage, exhibition stands, vehicle branding, display stands and print, designed, made and installed.",
  applicationName: "The Idea Brands",
  openGraph: { type: "website", locale: "en_AE", siteName: "The Idea Brands" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
