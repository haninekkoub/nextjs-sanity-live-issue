import { i18n } from "@/i18n.config";
import { sanityFetch } from "@/sanity/lib/live";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const query = `*[_type == "hero" && locale == $locale][0]{...}`;
  const { data } = await sanityFetch({ query, params: { locale } });
  return (
    <div>
      <h1>Locale: {locale}</h1>
      {data && <h1>{data.title}</h1>}
    </div>
  );
}
