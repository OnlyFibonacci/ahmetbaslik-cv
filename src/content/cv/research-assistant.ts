import type { CvDocument } from "./types";

/**
 * Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği
 * Araştırma Görevlisi başvurusu için birleşik özgeçmiş
 * (fintech/TradingView + bilgi sistemleri + e-ticaret; grafik tasarım hariç).
 */
export const researchAssistantCv: { tr: CvDocument; en: CvDocument } = {
  tr: {
    heroRole: "Bilişim Sistemleri Mühendisi · Fintech ve Bilgi Sistemleri",
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
    ],
    stack: [
      "Programlama: Python, Go, JavaScript/TypeScript, SQL, PHP, Pine Script",
      "Web ve sistem: React, Next.js, Flask, Gin, Docker, MySQL, API tasarımı",
      "Veri ve otomasyon: web scraping, backtest, webhook, borsa API entegrasyonları",
      "Araçlar: GitHub, n8n, Excel, Google Analytics, Iyzico",
    ],
    educationTitle: "Bilişim Sistemleri Mühendisliği",
    educationDetail: "Sakarya Üniversitesi, Türkiye",
    educationEntries: [
      {
        title: "Yüksek Lisans — Bilişim Sistemleri Mühendisliği",
        detail: "Sakarya Üniversitesi, Türkiye (devam ediyor)",
      },
      {
        title: "Lisans — Bilişim Sistemleri Mühendisliği",
        detail: "Sakarya Üniversitesi, Türkiye",
      },
    ],
    credentials: ["Askerlik tamamlandı", "B sınıfı ehliyet"],
    languages:
      "Türkçe — Ana dil\nİngilizce — İş düzeyi (okuma/yazma/teknik iletişim)",
    profile:
      "Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği lisans mezunu; aynı programda yüksek lisans eğitimine devam ediyorum. Bilgi sistemleri, fintech uygulamaları ve veri odaklı otomasyon alanlarında uçtan uca ürün geliştirme, açık kaynak çalışma ve teknik eğitim deneyimine sahibim. Araştırma görevlisi kadrosunda akademik üretime, laboratuvar/proje desteğine ve öğrenci mentorluğuna katkı sunmayı hedefliyorum.",
    jobs: [
      {
        title: "TradingView — Pine Script, Webhook ve Topluluk",
        period: "2021 — Günümüz",
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
        title: "Teknoloji Eğitmeni — Udemy, YouTube ve Telegram",
        period: "2022 — Günümüz",
        subtitle: "Algoritmik ticaret, Pine Script ve finansal sistem eğitimi",
        accent: "muted",
        bullets: [
          "3.000+ Udemy öğrencisi; 10.000+ YouTube abonesi; 200+ teknik video.",
          "Pine Script müfredatı, backtest ve üretim odaklı uygulamalı anlatım.",
          "500+ üyeli Telegram topluluğunda moderasyon, soru-cevap ve akran öğrenmesi.",
          "Öğrenci mentorluğu, teknik problem çözümü ve topluluk yönetimi deneyimi (akademik öğretim asistanlığına aktarılabilir).",
        ],
      },
      {
        title: "SealLayer — Açık kaynak (GitHub Org)",
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
        title: "adisyonqr.com — Multi-tenant SaaS",
        period: "Proje",
        subtitle: "Restoranlar için gerçek zamanlı sipariş ve yönetim sistemi",
        accent: "green",
        bullets: [
          "Çok kiracılı (multi-tenant) SaaS mimarisi.",
          "Dinamik QR menü üretimi ve özelleştirilebilir arayüz.",
        ],
      },
      {
        title: "Next-Markdown-Blog-Engine — Blog altyapısı",
        period: "Altyapı",
        subtitle: "Self-hosted, GitOps tabanlı Markdown blog motoru",
        accent: "muted",
        bullets: [
          "Veritabanı bağımlılığı olmadan Git tabanlı içerik; SSG ve performans odaklı mimari.",
          "Next.js (App Router), Tailwind CSS, Unified/Remark/Rehype, Docker, Coolify ile self-hosted dağıtım.",
        ],
      },
      {
        title: "ToptanTedarik.com — E-ticaret ve otomasyon",
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
      {
        title: "AlgoTrade.dev / store.algotrade.dev — Kurucu (önceki girişim)",
        period: "2023 — Faaliyet sona erdi",
        subtitle: "Fintech ve ed-tech ürünleri; ödeme ve abonelik altyapısı",
        accent: "muted",
        bullets: [
          "Finansal göstergelerin geliştirilmesi, dağıtımı ve kullanıcı provisioning süreçlerini uçtan uca yürüttüm.",
          "Iyzico API ile güvenli ödeme ve abonelik altyapısı kurdum; B2C/B2B teslimat süreçlerini yönettim.",
          "Ölçeklenebilir backend mimarisi ve davetiye tabanlı erişim yönetimi ile yüzlerce kullanıcıya hizmet verdim.",
        ],
      },
    ],
    skillsBlock:
      "Bilişim sistemleri: Python, Go, TypeScript/JavaScript, SQL, React, Next.js, Flask, Docker, API tasarımı. Entegrasyon ve otomasyon: webhook, ödeme API'leri, veri analizi. Fintech: Pine Script, backtest, teknik analiz. Eğitim ve iletişim: teknik içerik üretimi, mentorluk, topluluk yönetimi. Araştırma ilgisi: ölçeklenebilir sistemler, güvenilirlik/denetlenebilirlik, finansal sistemler ve bilgi sistemleri uygulamaları.",
    whyTitle: "Araştırma görevlisi motivasyonu",
    whyBody:
      "Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği lisans eğitimim ve devam eden yüksek lisans sürecim üzerine kurduğum fintech ve bilgi sistemleri pratiğini akademik ortama taşımak istiyorum. Açık kaynak üretim, teknik eğitim ve uçtan uca sistem geliştirme deneyimim; araştırma projelerinde uygulama, laboratuvar desteği ve öğrenci mentorluğu için güçlü bir temel oluşturuyor. Disiplinli, ölçülebilir çıktı üreten ve öğrenmeye açık bir araştırma görevlisi adayıyım.",
  },
  en: {
    heroRole: "Information Systems Engineer · Fintech and Information Systems",
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
    ],
    stack: [
      "Programming: Python, Go, JavaScript/TypeScript, SQL, PHP, Pine Script",
      "Web and systems: React, Next.js, Flask, Gin, Docker, MySQL, API design",
      "Data and automation: web scraping, backtesting, webhooks, exchange API integrations",
      "Tools: GitHub, n8n, Excel, Google Analytics, Iyzico",
    ],
    educationTitle: "Information Systems Engineering",
    educationDetail: "Sakarya University, Türkiye",
    educationEntries: [
      {
        title: "M.Sc. — Information Systems Engineering",
        detail: "Sakarya University, Türkiye (in progress)",
      },
      {
        title: "B.Sc. — Information Systems Engineering",
        detail: "Sakarya University, Türkiye",
      },
    ],
    credentials: ["Military service completed", "Class B driver's license"],
    languages:
      "Turkish — Native\nEnglish — Professional working proficiency (reading/writing/technical communication)",
    profile:
      "B.Sc. graduate of Sakarya University, Information Systems Engineering; currently pursuing an M.Sc. in the same program. Experience across information systems, fintech applications, and data-driven automation - including end-to-end product delivery, open-source work, and technical education. Seeking a Research Assistant role to contribute to academic output, lab/project support, and student mentoring.",
    jobs: [
      {
        title: "TradingView — Pine Script, Webhooks, and Community",
        period: "2021 — Present",
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
        title: "Tech Educator — Udemy, YouTube, and Telegram",
        period: "2022 — Present",
        subtitle: "Algorithmic trading, Pine Script, and financial systems education",
        accent: "muted",
        bullets: [
          "3,000+ Udemy students; 10,000+ YouTube subscribers; 200+ technical videos.",
          "Pine Script curriculum, backtesting, and production-oriented teaching.",
          "Moderated a 500+ member Telegram community with Q&A and peer learning.",
          "Student mentoring and technical troubleshooting (transferable to academic TA work).",
        ],
      },
      {
        title: "SealLayer — Open source (GitHub Org)",
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
        title: "adisyonqr.com — Multi-tenant SaaS",
        period: "Project",
        subtitle: "Real-time ordering and management for restaurants",
        accent: "green",
        bullets: [
          "Multi-tenant SaaS architecture.",
          "Dynamic QR menu generation and customizable UI.",
        ],
      },
      {
        title: "Next-Markdown-Blog-Engine — Blog platform",
        period: "Infrastructure",
        subtitle: "Self-hosted, GitOps-based Markdown blog engine",
        accent: "muted",
        bullets: [
          "Git-based content without a database; SSG and performance-focused architecture.",
          "Next.js (App Router), Tailwind CSS, Unified/Remark/Rehype, Docker, Coolify deployment.",
        ],
      },
      {
        title: "ToptanTedarik.com — E-commerce and automation",
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
      {
        title: "AlgoTrade.dev / store.algotrade.dev — Founder (previous venture)",
        period: "2023 — Discontinued",
        subtitle: "Fintech and ed-tech products; payments and subscriptions",
        accent: "muted",
        bullets: [
          "Led end-to-end development, distribution, and user provisioning for financial indicators.",
          "Built secure payment and subscription flows with the Iyzico API; managed B2C/B2B delivery.",
          "Designed scalable backend architecture and invite-only access serving hundreds of users.",
        ],
      },
    ],
    skillsBlock:
      "Information systems: Python, Go, TypeScript/JavaScript, SQL, React, Next.js, Flask, Docker, API design. Integration and automation: webhooks, payment APIs, data analysis. Fintech: Pine Script, backtesting, technical analysis. Teaching and communication: technical content, mentoring, community management. Research interests: scalable systems, reliability/auditability, financial systems, and information systems applications.",
    whyTitle: "Research assistant motivation",
    whyBody:
      "I aim to bring fintech and information systems practice - built on my Sakarya University Information Systems Engineering B.Sc. and ongoing M.Sc. - into an academic setting. Open-source output, technical teaching, and end-to-end systems experience provide a strong base for research projects, lab support, and student mentoring. I am a disciplined, output-oriented Research Assistant candidate who is eager to learn and contribute.",
  },
};
