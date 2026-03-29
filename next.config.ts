import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  /** Docker / Coolify: tek bir Node sürecinde çalıştırmak için */
  output: "standalone",
};

export default withNextIntl(nextConfig);
