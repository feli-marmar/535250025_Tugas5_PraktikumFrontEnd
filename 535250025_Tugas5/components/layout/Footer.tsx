import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="mt-16 bg-pink-300 py-10 text-white-300">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-black">CodeNova Solutions</h3>
          <p className="mt-2 text-sm text-black">
            Mitra teknologi terpercaya untuk transformasi digital bisnis Anda.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-black">Navigasi</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about" className="text-sm text-black">Tentang Kami</Link></li>
            <li><Link href="/services" className="text-sm text-black">Layanan</Link></li>
            <li><Link href="/contact" className="text-sm text-black">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black">Kontak</h4>
          <p className="text-sm text-black">codenovasolutions@gmail.com</p>
          <p className="text-sm text-black">+62 859 3412 7856</p>
        </div>
      </Container>
      <p className="mt-8 text-center text-xs text-black">
        © {new Date().getFullYear()} CodeNova Solutions. All rights reserved.
      </p>
    </footer>
  );
}