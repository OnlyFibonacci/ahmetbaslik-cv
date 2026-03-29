"use client";

import { useEffect } from "react";

/**
 * document.documentElement.lang değerini geçerli locale ile senkronize eder (SEO ve erişilebilirlik).
 */
export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
