import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getSimulationsByLocale } from '@/data/simulations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ArchivePage' });
  return { title: t('title') };
}

export default async function Archive({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ArchivePage' });
  const simulations = getSimulationsByLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <p className="text-muted-foreground mb-10">{t('subtitle')}</p>

      <div className="flex flex-col gap-6">
        {simulations.map((sim) => (
          <Link
            key={sim.slug}
            href={`/${locale}/archive/${sim.slug}`}
            className="group block border border-border rounded-xl p-6 hover:border-foreground/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-muted-foreground font-mono">
                #{sim.number}
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(sim.date).toLocaleDateString(
                  locale === 'ru' ? 'ru-RU' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-3 group-hover:underline">
              {sim.title}
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {sim.tldr}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
