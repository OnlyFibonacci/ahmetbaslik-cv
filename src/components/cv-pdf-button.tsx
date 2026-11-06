"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { printCvElement } from "@/lib/print-cv";
import { cn } from "@/lib/utils";

/**
 * CV’yi temiz iframe’de yazdırır (PDF). Sayfa script/RSC sızıntısı olmaz.
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
        onClick={() => {
          const root = document.querySelector<HTMLElement>(".cv-print-root");
          if (!root) {
            console.error("CV yazdırma kökü (.cv-print-root) bulunamadı.");
            return;
          }
          printCvElement(root);
        }}
      >
        {t("downloadPdf")}
      </Button>
      <p className="text-xs text-muted-foreground">{t("downloadPdfHint")}</p>
    </div>
  );
}
