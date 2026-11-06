import { getTranslations } from "next-intl/server";

import type { CvDocument } from "@/content/cv/types";

interface CvDocumentViewProps {
  doc: CvDocument;
}

/**
 * ATS uyumlu tek sütun özgeçmiş: sade tipografi, ikon/fotoğraf yok, Türkçe karakter destekli.
 */
export async function CvDocumentView({ doc }: CvDocumentViewProps) {
  const t = await getTranslations("cv");

  const contactParts = [
    doc.contactEmail,
    doc.contactPhone,
    doc.contactLocation,
  ].filter(Boolean);

  return (
    <article className="cv-print-root mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {/* Üst bilgi: ad, unvan, iletişim — ATS’nin ilk okuduğu blok */}
      <header className="border-b border-foreground/20 pb-5">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t("personName")}
        </h1>
        <p className="mt-1 text-base text-foreground/80">{doc.heroRole}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {contactParts.join(" | ")}
        </p>
        {doc.links.length > 0 ? (
          <p className="mt-1 text-sm leading-relaxed text-foreground">
            {doc.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " | " : null}
                <a
                  href={link.href}
                  className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        ) : null}
      </header>

      <section className="mt-6">
        <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
          {t("profile")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {doc.profile}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
          {t("experience")}
        </h2>
        <div className="mt-4 flex flex-col gap-5">
          {doc.jobs.map((job, i) => (
            <div key={i} className="cv-job">
              <h3 className="text-sm font-semibold text-foreground">
                {job.title}
              </h3>
              <p className="mt-0.5 text-sm text-foreground/70">
                {job.period}
                {job.subtitle ? ` — ${job.subtitle}` : null}
              </p>
              <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-foreground">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
          {t("skills")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {doc.skillsBlock}
        </p>
        {doc.stack.length > 0 ? (
          <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-foreground">
            {doc.stack.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : null}
      </section>

      {doc.reach.length > 0 ? (
        <section className="mt-6">
          <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
            {t("reach")}
          </h2>
          <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-foreground">
            {doc.reach.map((r, i) => (
              <li key={i}>
                {r.value} — {r.label}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-6">
        <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
          {t("education")}
        </h2>
        <p className="mt-3 text-sm font-semibold text-foreground">
          {doc.educationTitle}
        </p>
        <p className="mt-0.5 text-sm text-foreground/80">{doc.educationDetail}</p>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
          {t("languages")}
        </h2>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground">
          {doc.languages}
        </p>
      </section>

      {doc.credentials.length > 0 ? (
        <section className="mt-6">
          <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
            {t("credentials")}
          </h2>
          <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-foreground">
            {doc.credentials.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-6">
        <h2 className="border-b border-foreground/15 pb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
          {doc.whyTitle}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {doc.whyBody}
        </p>
      </section>
    </article>
  );
}
