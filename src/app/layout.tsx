import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Fraunces } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten accent font (kept for legacy components still referencing it)
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Display serif used for large section/hero headings across the site
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://ecovoltenergy.com"),

  title: {
    default: "EcoVolt Energy | Clean Energy. Better Planet. Brighter Tomorrow.",
    template: "%s | EcoVolt Energy",
  },

  description:
    "EcoVolt Energy delivers innovative solar, wind, storage, and EV charging solutions that power homes, businesses, and communities sustainably.",

  keywords: [
    "EcoVolt Energy",
    "renewable energy solutions",
    "solar energy installation",
    "wind energy",
    "energy storage systems",
    "EV charging solutions",
    "clean energy company",
  ],

  authors: [{ name: "EcoVolt Energy" }],
  creator: "EcoVolt Energy",
  publisher: "EcoVolt Energy",

  category: "energy",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "EcoVolt Energy | Clean Energy. Better Planet. Brighter Tomorrow.",
    description:
      "Innovative renewable energy solutions that power homes, businesses, and communities sustainably.",
    url: "https://ecovoltenergy.com",
    siteName: "EcoVolt Energy",
    images: [
      {
        url: "/images/energy.jpg",
        width: 1600,
        height: 1000,
        alt: "EcoVolt Energy — solar panels and wind turbines",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "EcoVolt Energy | Clean Energy. Better Planet. Brighter Tomorrow.",
    description:
      "Innovative renewable energy solutions that power homes, businesses, and communities sustainably.",
    images: ["/images/energy.jpg"],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://ecovoltenergy.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "EcoVolt Energy",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${fraunces.variable} font-sans antialiased bg-white text-brand-900`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
