import { defineRouting } from "next-intl/routing";

/**
 * Dil önekli yönlendirme: /tr/..., /en/...
 */
export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
});
