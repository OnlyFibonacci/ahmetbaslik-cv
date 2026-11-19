import type { CvDocument } from "./types";

/**
 * Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği
 * Araştırma Görevlisi başvurusu için birleşik özgeçmiş
 * (yazılım + fintech/TradingView + e-ticaret; grafik tasarım hariç).
 */
export const researchAssistantCv: { tr: CvDocument; en: CvDocument } = {
  tr: {
    heroRole:
      "Bilişim Sistemleri Mühendisi · Yazılım, Fintech ve Bilgi Sistemleri",
    reach: [
      { value: "10K+", label: "YouTube teknik içerik takipçisi (@OnlyFibonacci)" },
      { value: "3K+", label: "Udemy öğrencisi (algoritmik ticaret ve Pine Script)" },
      { value: "200+", label: "Teknik eğitim videosu" },
      { value: "10K+", label: "TradingView takipçisi" },
      { value: "8K+", label: "Açık kaynak gösterge paketi topluluk boost" },
    ],
    contactEmail: "ahmetbslk@gmail.com",
    contactPhone: "+90 (536) 912 76 67",
    contactLocation: "Sakarya, Türkiye",
    links: [
      {
        label: "linkedin.com/in/ahmetbaslik",
        href: "https://www.linkedin.com/in/ahmetbaslik",
      },
      {
        label: "github.com/OnlyFibonacci",
        href: "https://github.com/OnlyFibonacci",
      },
      {
        label: "github.com/SealLayer",
        href: "https://github.com/SealLayer",
      },
      {
        label: "youtube.com/@OnlyFibonacci",
        href: "https://www.youtube.com/@OnlyFibonacci",
      },
      {
        label: "tr.tradingview.com/u/only_fibonacci",
        href: "https://tr.tradingview.com/u/only_fibonacci/",
      },
      {
        label: "store.algotrade.dev",
        href: "https://store.algotrade.dev",
      },
    ],
    stack: [
      "Programlama: Python, Go, JavaScript/TypeScript, SQL, PHP, Pine Script",
      "Web ve sistem: React, Next.js, Flask, Gin, Docker, MySQL, API tasarımı",
      "Veri ve otomasyon: web scraping, backtest, webhook, borsa API entegrasyonları",
      "Araçlar: GitHub, n8n, Excel, Google Analytics, Iyzico",
    ],
    educationTitle: "Bilişim Sistemleri Mühendisliği (Lisans)",
    educationDetail: "Sakarya Üniversitesi, Türkiye",
    credentials: ["Askerlik tamamlandı", "B sınıfı ehliyet"],
    languages: "Türkçe - Ana dil\nİngilizce - İş düzeyi (okuma/yazma/teknik iletişim)",
    profile:
      "Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği mezunu. Yazılım mühendisliği, bilgi sistemleri, fintech uygulamaları ve veri odaklı otomasyon alanlarında uçtan uca ürün geliştirme, açık kaynak çalışma ve teknik eğitim deneyimine sahibim. Araştırma görevlisi kadrosunda akademik üretime, laboratuvar/proje desteğine ve öğrenci mentorluğuna katkı sunmayı hedefliyorum.",
    jobs: [
      {
        title: "Kurucu ve Teknik Lider - AlgoTrade.dev / store.algotrade.dev",
        period: "2023 - Günümüz",
        subtitle: "Fintech ve ed-tech yazılım ürünleri; ödeme ve abonelik altyapısı",
        accent: "blue",
        bullets: [
          "Finansal göstergelerin geliştirilmesi, dağıtımı ve kullanıcı provisioning süreçlerini uçtan uca yürüttüm.",
          "Iyzico API ile güvenli ödeme ve abonelik altyapısı kurdum; B2C/B2B teslimat süreçlerini yönettim.",
          "Ölçeklenebilir backend mimarisi ve davetiye tabanlı erişim yönetimi ile yüzlerce kullanıcıya hizmet verdim.",
          "algotrade.dev üzerinde ürün geliştirmeyle paralel teknik içerik ve algoritmik ticaret yazıları ürettim.",
        ],
      },
      {
        title: "TradingView - Pine Script, Webhook ve Topluluk",
        period: "2021 - Günümüz",
        subtitle: "Premium üye; açık kaynak scriptler ve borsa entegrasyonları",
        accent: "green",
        bullets: [
          "10.000+ takipçi; onlarca public script; davetiye tabanlı göstergeler.",
          "TradingView uyarı/webhook akışlarını kripto borsaları ve özel uç noktalara bağladım (token, payload, alarm limitleri, vadeli sembol kuralları).",
          "Signal Table / çoklu gösterge paketi: 8.000+ topluluk boost.",
          "OKX Signal BOT (Strategy Scanner and Orderer): TradingView webhook ile OKX vadeli emir yönlendirme; OKX resmi hesabından olumlu teknik geri bildirim.",
          "The Leap yarışmasında resmi vitrinde yer alan script.",
        ],
      },
      {
        title: "Teknoloji Eğitmeni - Udemy, YouTube ve Telegram",
        period: "2022 - Günümüz",
        subtitle: "Algoritmik ticaret, Pine Script ve finansal yazılım eğitimi",
        accent: "muted",
        bullets: [
          "3.000+ Udemy öğrencisi; 10.000+ YouTube abonesi; 200+ teknik video.",
          "Pine Script müfredatı, backtest ve üretim odaklı uygulamalı anlatım.",
          "500+ üyeli Telegram topluluğunda moderasyon, soru-cevap ve akran öğrenmesi.",
          "Öğrenci mentorluğu, teknik problem çözümü ve topluluk yönetimi deneyimi (akademik öğretim asistanlığına aktarılabilir).",
        ],
      },
      {
        title: "SealLayer - Açık kaynak (GitHub Org)",
        period: "Açık kaynak",
        subtitle: "Gizlilik odaklı içerik bütünlüğü ve GPG imzalı halka açık ledger",
        accent: "blue",
        bullets: [
          "Ham veriyi sunucuya göndermeden SHA-256 özetleri üzerinden kriptografik mühürleme; GitHub'ı denetlenebilir ledger olarak kullanma.",
          "Go (Gin), OpenPGP, React 19, TypeScript, Vite ile tam yığın prototip.",
          "Odak: gizlilik, denetlenebilirlik ve istemci tarafı doğrulama.",
        ],
      },
      {
        title: "adisyonqr.com - Multi-tenant SaaS",
        period: "Yazılım projesi",
        subtitle: "Restoranlar için gerçek zamanlı sipariş ve yönetim sistemi",
        accent: "green",
        bullets: [
          "Çok kiracılı (multi-tenant) SaaS mimarisi.",
          "Dinamik QR menü üretimi ve özelleştirilebilir arayüz.",
        ],
      },
      {
        title: "Next-Markdown-Blog-Engine - Blog altyapısı",
        period: "Altyapı",
        subtitle: "Self-hosted, GitOps tabanlı Markdown blog motoru",
        accent: "muted",
        bullets: [
          "Veritabanı bağımlılığı olmadan Git tabanlı içerik; SSG ve performans odaklı mimari.",
          "Next.js (App Router), Tailwind CSS, Unified/Remark/Rehype, Docker, Coolify ile self-hosted dağıtım.",
        ],
      },
      {
        title: "ToptanTedarik.com - E-ticaret ve otomasyon",
        period: "E-ticaret",
        subtitle: "B2B/B2C operasyon; Python ile fiyat ve stok otomasyonu",
        accent: "blue",
        bullets: [
          "Kendi site ve pazaryerleri üzerinden çok kanallı satış ve operasyon yönetimi.",
          "Python web scraping ile rakip fiyat analizi ve otomatik fiyatlandırma.",
          "Envanter/stok için özelleştirilmiş backend süreçleri.",
          "Trendyol, Hepsiburada, N11, Pazarama, Amazon kanallarında mağaza yönetimi deneyimi.",
        ],
      },
    ],
    skillsBlock:
      "Yazılım mühendisliği: Python, Go, TypeScript/JavaScript, SQL, React, Next.js, Flask, Docker, API tasarımı. Bilgi sistemleri ve entegrasyon: webhook, ödeme API'leri, otomasyon, veri analizi. Fintech: Pine Script, backtest, teknik analiz. Eğitim ve iletişim: teknik içerik üretimi, mentorluk, topluluk yönetimi. Araştırma ilgisi: ölçeklenebilir sistemler, güvenilirlik/denetlenebilirlik, finansal yazılım ve bilgi sistemleri uygulamaları.",
    whyTitle: "Araştırma görevlisi motivasyonu",
    whyBody:
      "Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği lisans eğitimim üzerine kurduğum yazılım, fintech ve bilgi sistemleri pratiğini akademik ortama taşımak istiyorum. Açık kaynak üretim, teknik eğitim ve uçtan uca sistem geliştirme deneyimim; araştırma projelerinde uygulama, laboratuvar desteği ve öğrenci mentorluğu için güçlü bir temel oluşturuyor. Disiplinli, ölçülebilir çıktı üreten ve öğrenmeye açık bir araştırma görevlisi adayıyım.",
  },
  en: {
    heroRole:
      "Information Systems Engineer · Software, Fintech, and Information Systems",
    reach: [
      { value: "10K+", label: "YouTube technical audience (@OnlyFibonacci)" },
      { value: "3K+", label: "Udemy students (algorithmic trading and Pine Script)" },
      { value: "200+", label: "Technical education videos" },
      { value: "10K+", label: "TradingView followers" },
      { value: "8K+", label: "Open-source indicator suite community boosts" },
    ],
    contactEmail: "ahmetbslk@gmail.com",
    contactPhone: "+90 (536) 912 76 67",
    contactLocation: "Sakarya, Türkiye",
    links: [
      {
        label: "linkedin.com/in/ahmetbaslik",
        href: "https://www.linkedin.com/in/ahmetbaslik",
      },
      {
        label: "github.com/OnlyFibonacci",
        href: "https://github.com/OnlyFibonacci",
      },
      {
        label: "github.com/SealLayer",
        href: "https://github.com/SealLayer",
      },
      {
        label: "youtube.com/@OnlyFibonacci",
        href: "https://www.youtube.com/@OnlyFibonacci",
      },
      {
        label: "tr.tradingview.com/u/only_fibonacci",
        href: "https://tr.tradingview.com/u/only_fibonacci/",
      },
      {
        label: "store.algotrade.dev",
        href: "https://store.algotrade.dev",
      },
    ],
    stack: [
      "Programming: Python, Go, JavaScript/TypeScript, SQL, PHP, Pine Script",
      "Web and systems: React, Next.js, Flask, Gin, Docker, MySQL, API design",
      "Data and automation: web scraping, backtesting, webhooks, exchange API integrations",
      "Tools: GitHub, n8n, Excel, Google Analytics, Iyzico",
    ],
    educationTitle: "B.Sc. Information Systems Engineering",
    educationDetail: "Sakarya University, Türkiye",
    credentials: ["Military service completed", "Class B driver's license"],
    languages:
      "Turkish - Native\nEnglish - Professional working proficiency (reading/writing/technical communication)",
    profile:
      "Graduate of Sakarya University, Information Systems Engineering. Experience across software engineering, information systems, fintech applications, and data-driven automation - including end-to-end product delivery, open-source work, and technical education. Seeking a Research Assistant role to contribute to academic output, lab/project support, and student mentoring.",
    jobs: [
      {
        title: "Founder and Tech Lead - AlgoTrade.dev / store.algotrade.dev",
        period: "2023 - Present",
        subtitle: "Fintech and ed-tech software products; payments and subscriptions",
        accent: "blue",
        bullets: [
          "Led end-to-end development, distribution, and user provisioning for financial indicators.",
          "Built secure payment and subscription flows with the Iyzico API; managed B2C/B2B delivery.",
          "Designed scalable backend architecture and invite-only access serving hundreds of users.",
          "Published technical content alongside product work on algotrade.dev.",
        ],
      },
      {
        title: "TradingView - Pine Script, Webhooks, and Community",
        period: "2021 - Present",
        subtitle: "Premium member; open-source scripts and exchange integrations",
        accent: "green",
        bullets: [
          "10,000+ followers; dozens of public scripts; invite-only indicators.",
          "Wired TradingView alerts/webhooks to crypto exchanges and custom endpoints.",
          "Signal Table / multi-indicator suite: 8,000+ community boosts.",
          "OKX Signal BOT: TradingView webhook to OKX futures orders; positive official OKX feedback.",
          "Recognized script in The Leap official showcase.",
        ],
      },
      {
        title: "Tech Educator - Udemy, YouTube, and Telegram",
        period: "2022 - Present",
        subtitle: "Algorithmic trading, Pine Script, and financial software education",
        accent: "muted",
        bullets: [
          "3,000+ Udemy students; 10,000+ YouTube subscribers; 200+ technical videos.",
          "Pine Script curriculum, backtesting, and production-oriented teaching.",
          "Moderated a 500+ member Telegram community with Q&A and peer learning.",
          "Student mentoring and technical troubleshooting (transferable to academic TA work).",
        ],
      },
      {
        title: "SealLayer - Open source (GitHub Org)",
        period: "Open source",
        subtitle: "Privacy-first content integrity and GPG-signed public ledger",
        accent: "blue",
        bullets: [
          "Cryptographic sealing via SHA-256 hashes without uploading raw data; GitHub as an auditable ledger.",
          "Full-stack prototype with Go (Gin), OpenPGP, React 19, TypeScript, Vite.",
          "Focus: privacy, auditability, and client-side verification.",
        ],
      },
      {
        title: "adisyonqr.com - Multi-tenant SaaS",
        period: "Software project",
        subtitle: "Real-time ordering and management for restaurants",
        accent: "green",
        bullets: [
          "Multi-tenant SaaS architecture.",
          "Dynamic QR menu generation and customizable UI.",
        ],
      },
      {
        title: "Next-Markdown-Blog-Engine - Blog platform",
        period: "Infrastructure",
        subtitle: "Self-hosted, GitOps-based Markdown blog engine",
        accent: "muted",
        bullets: [
          "Git-based content without a database; SSG and performance-focused architecture.",
          "Next.js (App Router), Tailwind CSS, Unified/Remark/Rehype, Docker, Coolify deployment.",
        ],
      },
      {
        title: "ToptanTedarik.com - E-commerce and automation",
        period: "E-commerce",
        subtitle: "B2B/B2C operations; Python pricing and inventory automation",
        accent: "blue",
        bullets: [
          "Multi-channel sales and operations via owned site and marketplaces.",
          "Python web scraping for competitor price analysis and automated pricing.",
          "Custom backend processes for inventory/stock.",
          "Store management experience on Trendyol, Hepsiburada, N11, Pazarama, and Amazon.",
        ],
      },
    ],
    skillsBlock:
      "Software engineering: Python, Go, TypeScript/JavaScript, SQL, React, Next.js, Flask, Docker, API design. Information systems and integration: webhooks, payment APIs, automation, data analysis. Fintech: Pine Script, backtesting, technical analysis. Teaching and communication: technical content, mentoring, community management. Research interests: scalable systems, reliability/auditability, financial software, and information systems applications.",
    whyTitle: "Research assistant motivation",
    whyBody:
      "I aim to bring software, fintech, and information systems practice built on my Sakarya University Information Systems Engineering degree into an academic setting. Open-source output, technical teaching, and end-to-end systems experience provide a strong base for research projects, lab support, and student mentoring. I am a disciplined, output-oriented Research Assistant candidate who is eager to learn and contribute.",
  },
};
