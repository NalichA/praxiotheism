import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ArchivePage' });

  return {
    title: t('title'),
  };
}

export default function Archive() {
  const t = useTranslations('ArchivePage');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">{t('comingSoon')}</p>
      </div>
    </div>
  );
}
