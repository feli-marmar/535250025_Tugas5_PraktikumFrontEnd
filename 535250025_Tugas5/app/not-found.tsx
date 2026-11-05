import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-6xl font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-gray-600">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <div className="mt-6">
        <Button href="/">Kembali ke Beranda</Button>
      </div>
    </Container>
  );
}