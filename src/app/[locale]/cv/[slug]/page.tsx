import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CvDocumentView } from "@/components/cv-document-view";
import { buttonVariants } from "@/lib/button-variants";
import { getCvDocument, isCvSlug, type CvSlug } from "@/content/cv";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const titles: Record<CvSlug, { tr: string; en: string }> = {
  tradingview: {
    tr: "TradingView ve ortaklıklar",
    en: "TradingView & partnerships",
  },
  software: { tr: "Yazılım", en: "Software" },
  ecommerce: { tr: "E-ticaret", en: "E-commerce" },
};

export function generateStaticParams() {
  const slugs: CvSlug[] = ["tradingview", "software", "ecommerce"];
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isCvSlug(slug)) {
    return {};
  }
  const loc = locale === "en" ? "en" : "tr";
  const title = titles[slug][loc];
  return {
    title,
    description:
      loc === "tr"
        ? `${title} — Ahmet Başlık özgeçmişi`
        : `${title} — Ahmet Başlık résumé`,
  };
}

/**
 * Uzmanlık alanına göre özgeçmiş sayfası.
 */
export default async function CvPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isCvSlug(slug)) {
    notFound();
  }
  setRequestLocale(locale);
  const loc = locale === "en" ? "en" : "tr";
  const doc = getCvDocument(slug, loc);
  const t = await getTranslations("cv");

  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "-ml-2 gap-1"
          )}
        >
          <ArrowLeftIcon data-icon="inline-start" />
          {t("backHome")}
        </Link>
      </div>
      <CvDocumentView doc={doc} />
    </div>
  );
}
