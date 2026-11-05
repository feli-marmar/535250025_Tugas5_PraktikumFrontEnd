import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/service";

export const metadata: Metadata = { title: "Layanan" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan Kami"
        subtitle="Pilih layanan yang sesuai dengan kebutuhan bisnis Anda."
      />
      <Container className="py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </>
  );
}