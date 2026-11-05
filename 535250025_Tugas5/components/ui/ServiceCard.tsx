import Link from "next/link";
import { Service } from "@/data/service";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-xl border border-gray-200 bg-pink-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="text-4xl">{service.icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-purple-500">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{service.short}</p>
      <span className="mt-4 inline-block text-sm font-medium text-purple-500">
        Lihat detail →
      </span>
    </Link>
  );
}