/**
 * Çok dilli özgeçmiş verisi için ortak yapı.
 */
export type CvSlug =
  | "tradingview"
  | "software"
  | "ecommerce"
  | "graphic-design";

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
  educationTitle: string;
  educationDetail: string;
  credentials: string[];
  languages: string;
  profile: string;
  jobs: CvJob[];
  skillsBlock: string;
  whyTitle: string;
  whyBody: string;
}
