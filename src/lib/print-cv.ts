/**
 * CV DOM’unu temiz bir iframe’de yazdırır.
 * Next.js / next-themes script ve RSC payload sızıntısını önler.
 */
export function printCvElement(root: HTMLElement): void {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.style.opacity = "0";
  iframe.style.pointerEvents = "none";
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument;
  const win = iframe.contentWindow;
  if (!doc || !win) {
    document.body.removeChild(iframe);
    window.print();
    return;
  }

  const clone = root.cloneNode(true) as HTMLElement;
  clone.classList.remove("mx-auto", "max-w-3xl", "px-4", "py-10", "sm:px-6");
  clone.style.maxWidth = "100%";
  clone.style.margin = "0";
  clone.style.padding = "0";

  const html = `<!DOCTYPE html>
<html lang="${document.documentElement.lang || "tr"}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CV</title>
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
      color: #000;
      font-family: "Segoe UI", Arial, Helvetica, sans-serif;
      font-size: 11pt;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    h1 { font-size: 18pt; font-weight: 600; margin: 0 0 4pt; }
    h2 {
      font-size: 10pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin: 14pt 0 6pt;
      padding-bottom: 3pt;
      border-bottom: 1px solid #ccc;
    }
    h3 { font-size: 11pt; font-weight: 600; margin: 0; }
    p { margin: 4pt 0; }
    ul { margin: 4pt 0 0; padding-left: 18pt; }
    li { margin: 2pt 0; }
    a { color: #000; text-decoration: none; }
    header { border-bottom: 1px solid #333; padding-bottom: 10pt; margin-bottom: 4pt; }
    section { margin-top: 10pt; }
    .cv-job { margin-bottom: 10pt; }
  </style>
</head>
<body>${clone.outerHTML}</body>
</html>`;

  doc.open();
  doc.write(html);
  doc.close();

  const cleanup = () => {
    try {
      document.body.removeChild(iframe);
    } catch {
      /* iframe zaten kaldırılmış olabilir */
    }
  };

  const runPrint = () => {
    try {
      win.focus();
      win.print();
    } finally {
      // Yazdırma diyaloğu kapandıktan sonra temizle
      window.setTimeout(cleanup, 1000);
    }
  };

  // İçerik ve fontların yüklenmesi için kısa bekleme
  if (doc.readyState === "complete") {
    window.setTimeout(runPrint, 50);
  } else {
    iframe.onload = () => window.setTimeout(runPrint, 50);
  }
}
