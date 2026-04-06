import type { CvSlug } from "./types";
import { ecommerceCv } from "./ecommerce";
import { graphicDesignCv } from "./graphic-design";
import { softwareCv } from "./software";
import { tradingviewCv } from "./tradingview";

export type { CvDocument, CvSlug } from "./types";

/** Statik rota ve doğrulama için tek kaynak */
export const CV_SLUGS: CvSlug[] = [
  "tradingview",
  "software",
  "ecommerce",
  "graphic-design",
];

const bySlug = {
  tradingview: tradingviewCv,
  software: softwareCv,
  ecommerce: ecommerceCv,
  "graphic-design": graphicDesignCv,
} as const;

/**
 * Geçerli slug ve dile göre özgeçmiş metnini döndürür.
 */
export function getCvDocument(
  slug: CvSlug,
  locale: "tr" | "en"
): (typeof bySlug)[CvSlug]["tr"] {
  return bySlug[slug][locale];
}

export function isCvSlug(value: string): value is CvSlug {
  return (CV_SLUGS as readonly string[]).includes(value);
}
