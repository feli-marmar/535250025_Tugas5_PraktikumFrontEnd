import Container from "@/components/ui/Container";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { services } from "@/data/service";

const values = [
  { title: "Inovasi", desc: "Selalu menghadirkan solusi dengan teknologi terkini." },
  { title: "Integritas", desc: "Bekerja jujur, transparan, dan bertanggung jawab." },
  { title: "Kolaborasi", desc: "Tumbuh bersama klien sebagai mitra jangka panjang." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Tentang Kami */}
      <section id="tentang" className="scroll-mt-16 py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">Tentang Kami</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-black">Siapa Kami</h3>
              <p className="mt-3 leading-relaxed text-black">
                CodeNova Solutions didirikan pada tahun 2020 dengan misi membantu
                bisnis di Indonesia untuk beradaptasi di era digital. Kami terdiri
                dari tim developer, desainer, dan konsultan berpengalaman.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Visi &amp; Misi</h3>
              <p className="mt-3 leading-relaxed text-black">
                <strong>Visi:</strong> Menjadi mitra teknologi terdepan di Asia Tenggara.
              </p>
              <p className="mt-2 leading-relaxed text-black">
                <strong>Misi:</strong> Memberikan solusi digital yang berkualitas serta
                inovatif untuk meningkatkan efisiensi dan pertumbuhan bisnis klien.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-200 bg-pink-300 p-6 shadow-sm">
                <h3 className="font-semibold text-purple-700">{v.title}</h3>
                <p className="mt-2 text-sm text-black">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Layanan */}
      <section id="layanan" className="scroll-mt-16 py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">Layanan Kami</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-black">
            Solusi untuk kebutuhan digital bisnis Anda.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Statistik */}
      <section id="statistik" className="scroll-mt-16 bg-purple-200 py-14">
        <Container className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            ["150+", "Proyek Selesai"],
            ["80+", "Klien Puas"],
            ["10+", "Tahun Pengalaman"],
            ["25", "Tim Profesional"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-pink-400">{num}</p>
              <p className="mt-1 text-sm text-black">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Kontak */}
      <section id="kontak" className="scroll-mt-16 py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">Hubungi Kami</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-black">
            Kami siap membantu kebutuhan digital Anda.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Informasi Kontak</h3>
              <p className="text-black">📍 Jl. Letjen S. Parman No.1, Tomang, Kec. Grogol Petamburan, Kota Jakarta Barat, DKI Jakarta</p>
              <p className="text-black">📧 codenovasolutions@gmail.com</p>
              <p className="text-black">📞 +62 859 3412 7856</p>
              <p className="text-black">🕘 Senin - Jumat, 09.00 - 17.00 WIB</p>
            </div>
            <div className="rounded-xl border border-pink-200 bg-pink-300 p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}