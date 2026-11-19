/**
 * Çok dilli özgeçmiş verisi için ortak yapı.
 */
export type CvSlug =
  | "tradingview"
  | "software"
  | "ecommerce"
  | "graphic-design"
  | "research-assistant";

export type CvAccent = "blue" | "green" | "muted";

export interface CvStat {
  /** Büyük rakam veya metin */
  value: string;
  /** Açıklama satırı */
  label: string;
  /** vurgu rengi */
  tone?: "primary" | "success" | "foreground";
}

export interface CvLink {
  label: string;
  href: string;
  /** Kenar çubuğunda vurgulu gösterim */
  highlight?: boolean;
}

export interface CvJob {
  title: string;
  period: string;
  subtitle?: string;
  bullets: string[];
  accent: CvAccent;
}

/** Eğitim satırı (lisans / yüksek lisans vb.) */
export interface CvEducation {
  title: string;
  detail: string;
}

export interface CvDocument {
  /** Sayfa başlığı (H1 altı) */
  heroRole: string;
  /** Sol sütun rozet */
  sidebarBadge?: string;
  sidebarBadgeSub?: string;
  /** Reach kutuları */
  reach: CvStat[];
  contactEmail: string;
  contactEmailSecondary?: string;
  contactPhone: string;
  contactLocation?: string;
  links: CvLink[];
  stack: string[];
  /** Tek eğitim (geriye uyumluluk) */
  educationTitle: string;
  educationDetail: string;
  /** Birden fazla eğitim; varsa educationTitle/Detail yerine kullanılır */
  educationEntries?: CvEducation[];
  credentials: string[];
  languages: string;
  profile: string;
  jobs: CvJob[];
  skillsBlock: string;
  whyTitle: string;
  whyBody: string;
}
