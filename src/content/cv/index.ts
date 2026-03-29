import type { CvSlug } from "./types";
import { ecommerceCv } from "./ecommerce";
import { softwareCv } from "./software";
import { tradingviewCv } from "./tradingview";

export type { CvDocument, CvSlug } from "./types";

const bySlug = {
  tradingview: tradingviewCv,
  software: softwareCv,
  ecommerce: ecommerceCv,
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
  return value === "tradingview" || value === "software" || value === "ecommerce";
}
