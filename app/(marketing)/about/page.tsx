import SeoHead from "@/components/seo/SeoHead";

export default function AboutPage() {
  return (
    <>
      <SeoHead title="About | MyResort" description="เกี่ยวกับรีสอร์ตของเรา" />
      <main className="container py-10">
        <h1 className="text-2xl font-semibold">เกี่ยวกับเรา</h1>
        <p className="mt-2 text-neutral-600">รีสอร์ตริมทะเล บริการเป็นกันเอง</p>
      </main>
    </>
  );
}
