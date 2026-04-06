"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * next-themes sarmalayıcısı — html sınıfında light/dark.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="ahmetbaslik-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
