"use client";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  images?: string[];          // รองรับหลายรูปได้
  canonical?: string;
  url?: string;               // ใส่ URL เพจปัจจุบัน (absolute)
};

export default function SeoHead({
  title = "MyResort – Book Luxury Villas",
  description = "Book your perfect villa escape with instant availability and transparent pricing.",
  images = [],
  canonical,
  url,
}: Props) {
  const ogImages = images.filter(Boolean);
  return (
    <Head>
      {/* Title */}
      <title key="title">{title}</title>

      {/* Basics */}
      <meta key="desc" name="description" content={description} />
      {canonical && <link key="canonical" rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:desc" property="og:description" content={description} />
      <meta key="og:type" property="og:type" content="website" />
      {url && <meta key="og:url" property="og:url" content={url} />}

      {/* รองรับหลายรูป + ต้องเป็น absolute URL */}
      {ogImages.map((img, i) => (
        <meta key={`og:image:${i}`} property="og:image" content={img} />
      ))}

      {/* Twitter */}
      <meta key="tw:card" name="twitter:card" content="summary_large_image" />
      <meta key="tw:title" name="twitter:title" content={title} />
      <meta key="tw:desc" name="twitter:description" content={description} />
      {ogImages[0] && (
        <meta key="tw:image" name="twitter:image" content={ogImages[0]} />
      )}
    </Head>
  );
}
