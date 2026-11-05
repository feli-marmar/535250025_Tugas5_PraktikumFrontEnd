import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Tentang Kami" };

const values = [
  { title: "Inovasi", desc: "Selalu menghadirkan solusi dengan teknologi terkini." },
  { title: "Integritas", desc: "Bekerja jujur, transparan, dan bertanggung jawab." },
  { title: "Kolaborasi", desc: "Tumbuh bersama klien sebagai mitra jangka panjang." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat CodeNova Solutions."
      />
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-black">Siapa Kami</h2>
            <p className="mt-3 leading-relaxed text-black">
              CodeNova Solutions didirikan pada tahun 2020 dengan misi membantu
              bisnis di Indonesia untuk beradaptasi di era digital. Kami terdiri dari
              tim developer, desainer, dan konsultan berpengalaman.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black">Visi &amp; Misi</h2>
            <p className="mt-3 leading-relaxed text-black">
              <strong>Visi:</strong> Menjadi mitra teknologi terdepan di Asia
              Tenggara.
            </p>
            <p className="mt-2 leading-relaxed text-black">
              <strong>Misi:</strong> Memberikan solusi digital yang berkualitas serta inovatif untuk
              meningkatkan efisiensi dan pertumbuhan bisnis klien.
            </p>
          </div>
        </div>

        <h2 className="mt-14 text-center text-2xl font-bold text-black">Nilai Perusahaan</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-gray-200 bg-pink-300 p-6 shadow-sm">
              <h3 className="font-semibold text-purple-700">{v.title}</h3>
              <p className="mt-2 text-sm text-black">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}