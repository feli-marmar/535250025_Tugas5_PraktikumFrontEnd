"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";

const navLinks = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang Kami" },
  { id: "layanan", label: "Layanan" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  // Scroll-spy: tandai menu aktif sesuai section yang sedang tampil di layar
  useEffect(() => {
    const onScroll = () => {
      const offset = 100; // tinggi navbar + sedikit toleransi
      let current = navLinks[0].id;

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = link.id;
        }
      }

      // Jika sudah di dasar halaman, paksa menu terakhir aktif
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) current = navLinks[navLinks.length - 1].id;

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-purple-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#beranda" className="text-xl font-bold text-pink-400">
          Code<span className="text-purple-400">Nova</span>
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? "bg-pink-400 text-white shadow-sm"
                  : "text-purple-500 hover:bg-purple-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tombol hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Menu mobile */}
      {open && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <Container className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-md px-4 py-3 text-sm font-medium ${
                  active === link.id
                    ? "bg-pink-400 text-white"
                    : "text-purple-500 hover:bg-purple-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}