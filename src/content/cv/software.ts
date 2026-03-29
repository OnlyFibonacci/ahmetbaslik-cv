import type { CvDocument } from "./types";

/**
 * Yazılım / SaaS / açık kaynak odaklı özgeçmiş.
 */
export const softwareCv: { tr: CvDocument; en: CvDocument } = {
  tr: {
    heroRole: "Bilişim Sistemleri Mühendisi",
    reach: [],
    contactEmail: "ahmetbslk@gmail.com",
    contactPhone: "+90 (536) 912 76 67",
    links: [
      { label: "linkedin.com/in/ahmetbaslik", href: "https://www.linkedin.com/in/ahmetbaslik" },
      { label: "github.com/OnlyFibonacci", href: "https://github.com/OnlyFibonacci" },
    ],
    stack: [
      "Python · Flask · SQL · API · SaaS · PHP · MySQL · cPanel · Go · React · TypeScript · Next.js · Docker · Vite · Pine Script · VS Code · Cursor · Antigravity",
    ],
    educationTitle: "Bilişim Sistemleri Mühendisliği",
    educationDetail: "Lisans · Sakarya Üniversitesi",
    credentials: ["B sınıfı ehliyet", "Askerlik tamamlandı"],
    languages: "Türkçe — Ana dil\nİngilizce — İş düzeyi",
    profile:
      "AI destekli geliştirme (VibeCoding) süreçlerine hakim; SaaS ve Fintech gibi karmaşık iş problemlerini hızlı prototipleme ve ölçeklenebilir kodla çözen Bilişim Sistemleri Mühendisi.",
    jobs: [
      {
        title: "store.algotrade.dev — Fintech platform",
        period: "Fintech",
        subtitle: "Finansal yazılımların küresel satışı; Iyzico ödeme entegrasyonu.",
        accent: "blue",
        bullets: [
          "Yazılım dağıtımı için ölçeklenebilir backend mimarisi.",
          "Iyzico API ile güvenli ödeme ve abonelik altyapısı.",
        ],
      },
      {
        title: "adisyonqr.com — SaaS",
        period: "SaaS",
        subtitle: "Restoranlar için gerçek zamanlı sipariş ve yönetim; full-stack SaaS.",
        accent: "green",
        bullets: [
          "Multi-tenant SaaS mimarisi.",
          "Dinamik QR menü üretimi.",
          "Özelleştirilebilir tema.",
        ],
      },
      {
        title: "SealLayer — Açık kaynak / org",
        period: "Open source",
        subtitle:
          "Privacy-first içerik bütünlüğü ve GPG imzalı halka açık ledger.",
        accent: "muted",
        bullets: [
          "Ham veriyi sunucuya göndermeden SHA-256 hash üzerinden çalışma; GitHub’ı halka açık ledger olarak kullanan kriptografik mühürleme.",
          "Go (Gin), OpenPGP (ayrık imzalar), React 19, TypeScript, Vite.",
          "Odak: gizlilik, denetlenebilirlik, istemci tarafı doğrulama.",
        ],
      },
      {
        title: "Next-Markdown-Blog-Engine — Blog altyapısı",
        period: "Infrastructure",
        subtitle:
          "Self-hosted, yüksek performanslı Markdown blog motoru (GitOps).",
        accent: "blue",
        bullets: [
          "Veritabanı bağımlılığı olmayan, tamamen Git tabanlı içerik; SSG ve Lighthouse odaklı performans.",
          "Next.js 15+ (App Router), Tailwind CSS v4, Shiki, Unified / Remark / Rehype, Docker.",
          "Otomatik TOC; Coolify ile self-hosted dağıtım.",
        ],
      },
      {
        title: "ToptanTedarik.com — E-ticaret ve otomasyon",
        period: "E-commerce",
        subtitle: "E-ticaret operasyonları için otomasyon ve backend süreçleri.",
        accent: "green",
        bullets: [
          "Python ile web-scraping: rakip fiyat analizi, otomatik fiyatlandırma.",
          "Envanter / stok için özelleştirilmiş backend.",
        ],
      },
      {
        title: "Udemy — Yetkili eğitmen (Pine Script)",
        period: "Education",
        subtitle: "Algoritmik ticaret ve finansal yazılım eğitmeni.",
        accent: "muted",
        bullets: [
          "TradingView ve Pine Script ile teknik analiz ve strateji eğitimi.",
          "3.000+ öğrenciye algoritma ve backtest mentorluğu.",
          "Topluluk yönetimi ve teknik problem çözümü.",
        ],
      },
    ],
    skillsBlock:
      "Backend: Python, Flask, Go (Gin), SQL, API tasarımı · Ön yüz: React, TypeScript, Next.js, Vite · Altyapı: Docker, MySQL, cPanel · Diğer: Pine Script, SaaS, AI destekli geliştirme, GitHub",
    whyTitle: "Neden ben?",
    whyBody:
      "Modern backend teknolojilerini ve AI destekli geliştirme yöntemlerini birleştirerek klasik süreçlere göre daha hızlı ve kaliteli çıktı üretmeye odaklanıyorum. Mühendislik disiplinimi ürün odaklı bakışla birleştirip teknik problemlere pragmatik çözümler sunuyorum.",
  },
  en: {
    heroRole: "Information Systems Engineer",
    reach: [],
    contactEmail: "ahmetbslk@gmail.com",
    contactPhone: "+90 (536) 912 76 67",
    links: [
      { label: "linkedin.com/in/ahmetbaslik", href: "https://www.linkedin.com/in/ahmetbaslik" },
      { label: "github.com/OnlyFibonacci", href: "https://github.com/OnlyFibonacci" },
    ],
    stack: [
      "Python · Flask · SQL · API · SaaS · PHP · MySQL · cPanel · Go · React · TypeScript · Next.js · Docker · Vite · Pine Script · VS Code · Cursor · Antigravity",
    ],
    educationTitle: "B.Sc. Information Systems Engineering",
    educationDetail: "Undergraduate · Sakarya University",
    credentials: ["Class B driver’s license", "Military service completed"],
    languages: "Turkish — Native\nEnglish — Professional working proficiency",
    profile:
      "Proficient in AI-assisted development (VibeCoding); solving complex business problems (SaaS, fintech) through rapid prototyping and scalable architecture as an Information Systems Engineer.",
    jobs: [
      {
        title: "store.algotrade.dev — Fintech platform",
        period: "Fintech",
        subtitle: "Global distribution of financial software; Iyzico payment integration.",
        accent: "blue",
        bullets: [
          "Scalable backend architecture for software delivery.",
          "Secure payments and subscription infrastructure via the Iyzico API.",
        ],
      },
      {
        title: "adisyonqr.com — SaaS",
        period: "SaaS",
        subtitle: "Real-time ordering and management for restaurants; full-stack SaaS.",
        accent: "green",
        bullets: [
          "Multi-tenant SaaS architecture.",
          "Dynamic QR menu generation.",
          "Customizable theming.",
        ],
      },
      {
        title: "SealLayer — Open source org",
        period: "Open source",
        subtitle:
          "Privacy-first content integrity and GPG-signed public ledger.",
        accent: "muted",
        bullets: [
          "Operate on SHA-256 hashes without sending raw data to servers; cryptographic sealing using GitHub as a public ledger.",
          "Go (Gin), OpenPGP (detached signatures), React 19, TypeScript, Vite.",
          "Focus: privacy, auditability, client-side verification.",
        ],
      },
      {
        title: "Next-Markdown-Blog-Engine — Blog platform",
        period: "Infrastructure",
        subtitle:
          "Self-hosted, high-performance Markdown blog engine (GitOps).",
        accent: "blue",
        bullets: [
          "No database dependency—fully Git-based content; SSG and Lighthouse-focused performance.",
          "Next.js 15+ (App Router), Tailwind CSS v4, Shiki, Unified / Remark / Rehype, Docker.",
          "Automatic TOC; self-hosted deployment with Coolify.",
        ],
      },
      {
        title: "ToptanTedarik.com — E-commerce & automation",
        period: "E-commerce",
        subtitle: "Automation and backend processes for e-commerce operations.",
        accent: "green",
        bullets: [
          "Python web scraping: competitor price analysis, automated pricing.",
          "Custom backend for inventory and stock.",
        ],
      },
      {
        title: "Udemy — Authorized instructor (Pine Script)",
        period: "Education",
        subtitle: "Algorithmic trading and financial software instructor.",
        accent: "muted",
        bullets: [
          "Technical analysis and strategy training with TradingView and Pine Script.",
          "Mentored 3,000+ students on algorithms and backtesting.",
          "Community management and technical troubleshooting.",
        ],
      },
    ],
    skillsBlock:
      "Backend: Python, Flask, Go (Gin), SQL, API design · Frontend: React, TypeScript, Next.js, Vite · Infra: Docker, MySQL, cPanel · Other: Pine Script, SaaS, AI-assisted development, GitHub",
    whyTitle: "Why me?",
    whyBody:
      "I combine modern backend practices with AI-assisted development to ship faster and with higher quality than traditional workflows. I pair engineering discipline with a product mindset to deliver pragmatic solutions.",
  },
};
