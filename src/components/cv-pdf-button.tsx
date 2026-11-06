"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Tarayıcı yazdırma ile PDF. Yazdırma sırasında gövdeye sınıf ekleyerek sızıntıyı engeller.
 */
export function CvPdfButton({ className }: { className?: string }) {
  const t = useTranslations("cv");

  useEffect(() => {
    const onBefore = () => {
      document.documentElement.classList.add("is-printing");
    };
    const onAfter = () => {
      document.documentElement.classList.remove("is-printing");
    };
    window.addEventListener("beforeprint", onBefore);
    window.addEventListener("afterprint", onAfter);
    return () => {
      window.removeEventListener("beforeprint", onBefore);
      window.removeEventListener("afterprint", onAfter);
      document.documentElement.classList.remove("is-printing");
    };
  }, []);

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
          document.documentElement.classList.add("is-printing");
          window.print();
        }}
      >
        {t("downloadPdf")}
      </Button>
      <p className="text-xs text-muted-foreground">{t("downloadPdfHint")}</p>
    </div>
  );
}
