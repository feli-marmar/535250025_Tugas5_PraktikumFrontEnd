"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  const inputStyle =
    "w-full rounded-lg border border-rose-200 px-4 py-2.5 text-sm text-black outline-none focus:border-rose-200 focus:ring-2 focus:ring-rose-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Nama lengkap" required className={inputStyle} />
      <input type="email" placeholder="Email" required className={inputStyle} />
      <textarea placeholder="Pesan Anda" rows={5} required className={inputStyle} />
      <button
        type="submit"
        className="w-full rounded-lg bg-pink-500 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-600 sm:w-auto"
      >
        Kirim Pesan
      </button>
      {sent && (
        <p className="text-sm font-medium text-green-700">
          ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
        </p>
      )}
    </form>
  );
}