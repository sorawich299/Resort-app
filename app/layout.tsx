import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { absoluteUrl } from "@/lib/absoluteUrl";

export const metadata: Metadata = {
  title: "MyResort | Home",
  description: "พูลวิลล่าติดทะเล บรรยากาศเป็นส่วนตัว3333333",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: "MyResort | Home",
    description: "พูลวิลล่าติดทะเล บรรยากาศเป็นส่วนตัว33333333",
    images: [
      { url: absoluteUrl("/images/og/home.webp") }, // ต้องเป็น absolute เท่านั้น
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyResort | Home",
    description: "พูลวิลล่าติดทะเล บรรยากาศเป็นส่วนตัว333333",
    images: [absoluteUrl("/images/og/home.webp")],
    // (ไม่บังคับ) ใส่ handle เพื่อความสมบูรณ์
    // site: "@your_twitter",
    // creator: "@your_twitter",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },           // default
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
