"use client";

import { DownloadIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Tarayıcı yazdırma ile PDF kaydı (hedef: PDF yazıcısı).
 */
export function CvPdfButton({ className }: { className?: string }) {
  const t = useTranslations("cv");

  return (
    <div className={cn("flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3", className)}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="gap-1.5"
        onClick={() => window.print()}
      >
        <DownloadIcon data-icon="inline-start" />
        {t("downloadPdf")}
      </Button>
      <p className="text-xs text-muted-foreground">{t("downloadPdfHint")}</p>
    </div>
  );
}
