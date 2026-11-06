"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Tarayıcı yazdırma ile PDF kaydı (hedef: PDF yazıcısı). İkon kullanılmaz.
 */
export function CvPdfButton({ className }: { className?: string }) {
  const t = useTranslations("cv");

  return (
    <div
      className={cn(
        "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3",
        className
      )}
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => window.print()}
      >
        {t("downloadPdf")}
      </Button>
      <p className="text-xs text-muted-foreground">{t("downloadPdfHint")}</p>
    </div>
  );
}
