import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/absoluteUrl";

type BuildMetaInput = {
  title?: string;
  description?: string;
  images?: string[];   // ควรเป็น absolute URL ถ้าเป็น OG/Twitter
  canonical?: string;  // ใส่เป็น path เช่น "/villas/infinity" หรือ absolute ก็ได้
  url?: string;        // absolute URL ของเพจปัจจุบัน (ถ้าไม่ส่งจะเดาจาก canonical)
};

export function buildPageMetadata(input: BuildMetaInput = {}): Metadata {
  const {
    title = "MyResort – Book Luxury Villas",
    description = "Book your perfect villa escape with instant availability and transparent pricing.",
    images = [],
    canonical,
    url,
  } = input;

  // ทำ canonical + url ให้เป็น absolute
  const canonicalAbs = canonical
    ? canonical.startsWith("http") ? canonical : absoluteUrl(canonical)
    : undefined;

  const pageUrl = url || canonicalAbs;

  // ทำรูปให้เป็น absolute ถ้ายังไม่ใช่
  const ogImages = images.map((img) =>
    img.startsWith("http") ? img : absoluteUrl(img)
  );

  return {
    title,
    description,
    alternates: canonicalAbs ? { canonical: canonicalAbs } : undefined,
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description,
      images: ogImages.map((u) => ({ url: u })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.length ? [ogImages[0]] : undefined,
    },
  };
}
