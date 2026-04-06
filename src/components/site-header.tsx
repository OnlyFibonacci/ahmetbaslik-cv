"use client";

import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { buttonVariants } from "@/lib/button-variants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/cv/tradingview", key: "cvTrading" as const },
  { href: "/cv/software", key: "cvSoftware" as const },
  { href: "/cv/ecommerce", key: "cvEcommerce" as const },
  { href: "/cv/graphic-design", key: "cvGraphicDesign" as const },
];

/**
 * Üst gezinme: çok dilli bağlantılar ve dil seçici.
 */
export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="print:hidden sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground"
        >
          {t("brand")}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                pathname === item.href && "bg-muted"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {t("language")}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {routing.locales.map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  onClick={() => {
                    router.replace(pathname, { locale: loc });
                  }}
                >
                  {loc === "tr" ? "Türkçe" : "English"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "md:hidden"
              )}
              aria-label={t("openMenu")}
            >
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="flex w-52 flex-col gap-1 p-2">
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  onClick={() => {
                    router.push(item.href);
                  }}
                >
                  {t(item.key)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
