import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { services } from "@/data/service";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service ? service.title : "Layanan tidak ditemukan" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <PageHeader title={`${service.icon} ${service.title}`} subtitle={service.short} />
      <Container className="py-12">
        <Link href="/services" className="text-sm font-medium text-purple-600 hover:underline">
          ← Kembali ke semua layanan
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-black">Deskripsi</h2>
            <p className="mt-3 leading-relaxed text-black">{service.description}</p>

            <h2 className="mt-8 text-2xl font-bold text-black">Fitur Utama</h2>
            <ul className="mt-3 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-black">
                  <span className="text-green-600">✔</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-xl border border-gray-200 bg-pink-300 p-6 shadow-sm">
            <h3 className="font-semibold text-black">Tertarik dengan layanan ini?</h3>
            <p className="mt-2 text-sm text-black">
              Konsultasikan kebutuhan Anda bersama tim kami.
            </p>
            <div className="mt-4">
              <Button href="/contact">Hubungi Kami</Button>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}