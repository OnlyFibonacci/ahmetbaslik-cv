import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CvDocument } from "@/content/cv/types";
import { cn } from "@/lib/utils";

interface CvDocumentViewProps {
  doc: CvDocument;
}

/**
 * Tek bir özgeçmiş belgesinin tam sayfa düzeni (sol sütun + ana içerik).
 */
export async function CvDocumentView({ doc }: CvDocumentViewProps) {
  const t = await getTranslations("cv");

  const borderAccent = {
    blue: "border-l-primary",
    green: "border-l-chart-2",
    muted: "border-l-muted-foreground",
  } as const;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr]">
        <aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
          <Card>
            <CardHeader className="flex flex-col items-center gap-3 text-center">
              <div className="relative size-28 overflow-hidden rounded-full ring-2 ring-primary ring-offset-2 ring-offset-card">
                <Image
                  src="/cv_foto.jpg"
                  alt={t("personName")}
                  width={224}
                  height={224}
                  className="size-full object-cover object-top"
                  priority
                />
              </div>
              <div>
                <CardTitle className="text-xl">{t("personName")}</CardTitle>
                <CardDescription className="mt-1 text-pretty">
                  {doc.heroRole}
                </CardDescription>
              </div>
              {doc.sidebarBadge ? (
                <div className="flex flex-col gap-0.5">
                  <Badge variant="secondary">{doc.sidebarBadge}</Badge>
                  {doc.sidebarBadgeSub ? (
                    <span className="text-xs text-muted-foreground">
                      {doc.sidebarBadgeSub}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </CardHeader>
          </Card>

          {doc.reach.length > 0 ? (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {t("reach")}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {doc.reach.map((r, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-2"
                  >
                    <p
                      className={cn(
                        "text-lg font-semibold leading-none",
                        r.tone === "primary" && "text-primary",
                        r.tone === "success" && "text-chart-2",
                        r.tone === "foreground" && "text-foreground"
                      )}
                    >
                      {r.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {r.label}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ) : null}

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t("contact")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              <a
                className="text-primary underline-offset-4 hover:underline"
                href={`mailto:${doc.contactEmail}`}
              >
                {doc.contactEmail}
              </a>
              <a className="hover:text-primary" href={`tel:${doc.contactPhone.replace(/\s/g, "")}`}>
                {doc.contactPhone}
              </a>
              {doc.contactLocation ? (
                <span className="text-muted-foreground">{doc.contactLocation}</span>
              ) : null}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t("links")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1.5">
              {doc.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm text-primary underline-offset-4 hover:underline",
                    link.highlight && "font-semibold text-chart-2"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t("stack")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex list-disc flex-col gap-1 pl-4 text-sm text-muted-foreground">
                {doc.stack.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <Separator className="my-4" />
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t("education")}
              </p>
              <p className="mt-2 text-sm">
                <span className="font-medium text-foreground">
                  {doc.educationTitle}
                </span>
                <br />
                <span className="text-muted-foreground">{doc.educationDetail}</span>
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t("credentials")}
              </p>
              <ul className="mt-1 flex list-disc flex-col gap-0.5 pl-4 text-sm">
                {doc.credentials.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t("languages")}
              </p>
              <p className="mt-1 whitespace-pre-line text-sm">{doc.languages}</p>
            </CardContent>
          </Card>
        </aside>

        <div className="flex min-w-0 flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {t("personName")}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {doc.heroRole}
            </p>
            <Separator className="mt-6" />
          </div>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-primary">
              {t("profile")}
            </h2>
            <p className="mt-2 text-pretty leading-relaxed text-foreground">
              {doc.profile}
            </p>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-chart-2">
              {t("experience")}
            </h2>
            <div className="mt-4 flex flex-col gap-6">
              {doc.jobs.map((job, i) => (
                <article
                  key={i}
                  className={cn(
                    "border-l-4 pl-4",
                    borderAccent[job.accent]
                  )}
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {job.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {job.period}
                  </p>
                  {job.subtitle ? (
                    <p className="mt-1 text-xs text-muted-foreground">{job.subtitle}</p>
                  ) : null}
                  <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-sm leading-relaxed">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <Card className="border-border bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-primary">
                {t("skills")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-pretty">{doc.skillsBlock}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-chart-2">
                {doc.whyTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-pretty">{doc.whyBody}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
