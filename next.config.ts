import type { NextConfig } from "next";
import { i18n } from "./i18n.config";

const nonDefaultLocales = i18n.locales.filter(
  (locale) => locale !== i18n.defaultLocale
);

const localeRewriteSource = `/:path((?!${i18n.defaultLocale}|cms|api${nonDefaultLocales.length > 0 ? nonDefaultLocales.join("|") : ""}).*)`;

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: localeRewriteSource,
        destination: `/${i18n.defaultLocale}/:path`,
      },
    ];
  },
};

export default nextConfig;
