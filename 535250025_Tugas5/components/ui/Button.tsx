import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-pink-400 text-white hover:bg-pink-500"
      : "border border-black text-black hover:bg-black/10";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}