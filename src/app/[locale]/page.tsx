import { ArrowRightIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { buttonVariants } from "@/lib/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("siteName"),
    description: t("homeDescription"),
  };
}

const cards = [
  {
    href: "/cv/tradingview",
    title: "cvTrading" as const,
    desc: "cardTradingDesc" as const,
  },
  {
    href: "/cv/software",
    title: "cvSoftware" as const,
    desc: "cardSoftwareDesc" as const,
  },
  {
    href: "/cv/ecommerce",
    title: "cvEcommerce" as const,
    desc: "cardEcommerceDesc" as const,
  },
  {
    href: "/cv/graphic-design",
    title: "cvGraphicDesign" as const,
    desc: "cardGraphicDesc" as const,
  },
] as const;

/**
 * Ana sayfa: uzmanlık alanı kartları.
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tHome = await getTranslations("home");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {tHome("heroTitle")}
        </h1>
        <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
          {tHome("heroSubtitle")}
        </p>
      </div>

      <p className="mt-14 text-center text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {tHome("chooseTrack")}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Card key={c.href} className="flex flex-col border-border/80 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg leading-snug">
                {tNav(c.title)}
              </CardTitle>
              <CardDescription className="text-pretty">
                {tHome(c.desc)}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1" />
            <CardFooter>
              <Link
                href={c.href}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-full justify-center gap-1.5"
                )}
              >
                {tHome("viewCv")}
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        {tHome("footerNote")}
      </p>
    </div>
  );
}
