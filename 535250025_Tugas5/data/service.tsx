export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "🌐",
    short: "Pembuatan website modern, cepat, dan responsif.",
    description:
      "Kami membangun website perusahaan, toko online, hingga aplikasi web kompleks menggunakan teknologi terbaru seperti Next.js dan React.",
    features: [
      "Desain responsif untuk semua perangkat",
      "Optimasi SEO dan kecepatan",
      "Integrasi API dan database",
      "Maintenance berkelanjutan",
    ],
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    icon: "📱",
    short: "Aplikasi Android dan iOS dengan pengalaman pengguna terbaik.",
    description:
      "Tim kami mengembangkan aplikasi mobile lintas platform yang stabil, aman, dan mudah digunakan oleh pelanggan Anda.",
    features: [
      "Pengembangan lintas platform",
      "UI/UX yang intuitif",
      "Notifikasi push dan offline mode",
      "Publikasi ke Play Store dan App Store",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "🎨",
    short: "Desain antarmuka yang menarik dan berfokus pada pengguna.",
    description:
      "Kami merancang pengalaman digital mulai dari riset pengguna, wireframe, hingga prototipe interaktif yang siap dikembangkan.",
    features: [
      "Riset dan analisis pengguna",
      "Wireframe dan prototipe",
      "Design system yang konsisten",
      "Usability testing",
    ],
  },
  {
    slug: "cloud-consulting",
    title: "Cloud Consulting",
    icon: "☁️",
    short: "Konsultasi dan migrasi infrastruktur ke cloud.",
    description:
      "Kami membantu bisnis Anda berpindah ke cloud dengan aman, efisien, dan hemat biaya sesuai kebutuhan skala bisnis.",
    features: [
      "Audit infrastruktur",
      "Migrasi ke cloud",
      "Monitoring dan keamanan",
      "Optimasi biaya",
    ],
  },
];