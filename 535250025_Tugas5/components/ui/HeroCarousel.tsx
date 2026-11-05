"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";

type Slide = {
  title: string;
  description: string;
  gradient: string; 
  cta: { label: string; href: string };
  cta2: { label: string; href: string };
};

const slides: Slide[] = [
  {
    title: "Wujudkan Transformasi Digital Bisnis Anda",
    description:
      "CodeNova Solutions menghadirkan solusi teknologi yang inovatif sesuai dengan kebutuhan digital bisnis Anda.",
    gradient: "from-purple-400 via-pink-300 to-purple-400",
    cta: { label: "Lihat Layanan", href: "#layanan" },
    cta2: { label: "Hubungi Kami", href: "#kontak" },
  },
  {
    title: "Website Modern, Cepat, dan Responsif",
    description:
      "Dari company profile hingga toko online, kami bangun website yang nyaman dibuka di semua perangkat.",
    gradient: "from-pink-300 via-purple-300 to-pink-400",
    cta: { label: "Lihat Layanan", href: "#layanan" },
    cta2: { label: "Tentang Kami", href: "#tentang" },
  },
  {
    title: "Aplikasi Mobile dengan UI/UX Terbaik",
    description:
      "Aplikasi Android dan iOS yang stabil, aman, dan mudah digunakan oleh pelanggan Anda.",
    gradient: "from-purple-300 via-pink-200 to-purple-400",
    cta: { label: "Lihat Layanan", href: "#layanan" },
    cta2: { label: "Hubungi Kami", href: "#kontak" },
  },
  {
    title: "Konsultasi Cloud yang Aman dan Hemat",
    description:
      "Kami bantu migrasi infrastruktur bisnis Anda ke cloud secara efisien sesuai skala kebutuhan.",
    gradient: "from-pink-400 via-pink-300 to-purple-300",
    cta: { label: "Lihat Layanan", href: "#layanan" },
    cta2: { label: "Hubungi Kami", href: "#kontak" },
  },
];

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 50;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );

  // Auto-play: ganti slide otomatis, berhenti saat di-hover / disentuh
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  // Swipe untuk layar sentuh (HP / tablet)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (diff > SWIPE_THRESHOLD) prev();
      else if (diff < -SWIPE_THRESHOLD) next();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <section
      id="beranda"
      aria-roledescription="carousel"
      aria-label="Banner utama CodeNova Solutions"
      className="relative overflow-hidden text-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      {/* Track: semua slide berjajar horizontal, digeser dengan translateX */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${total}`}
            aria-hidden={i !== current}
            className={`flex min-h-[26rem] w-full shrink-0 items-center bg-gradient-to-br ${slide.gradient} px-4 py-16 sm:min-h-[32rem] sm:px-6 sm:py-24 lg:px-8`}
          >
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
              <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={slide.cta.href}>{slide.cta.label}</Button>
                <Button href={slide.cta2.href} variant="outline">
                  {slide.cta2.label}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol panah kiri / kanan (disembunyikan di HP, cukup swipe) */}
      <button
        onClick={prev}
        aria-label="Slide sebelumnya"
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-xl font-bold text-purple-600 shadow transition hover:bg-white sm:flex"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Slide berikutnya"
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-xl font-bold text-purple-600 shadow transition hover:bg-white sm:flex"
      >
        ›
      </button>

      {/* Indikator titik */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ke slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}