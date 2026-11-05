import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Kontak" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami siap membantu kebutuhan digital Anda."
      />
      <Container className="grid gap-10 py-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Informasi Kontak</h2>
          <p className="text-black">📍 Jl. Letjen S. Parman No.1, Tomang, Kec. Grogol Petamburan, Kota Jakarta Barat, DKI Jakarta</p>
          <p className="text-black">📧 codenovasolutions@gmail.com</p>
          <p className="text-black">📞 +62 859 3412 7856</p>
          <p className="text-black">🕘 Senin - Jumat, 09.00 - 17.00 WIB</p>
        </div>
        <div className="rounded-xl border border-pink-200 bg-pink-300 p-6 shadow-sm">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}