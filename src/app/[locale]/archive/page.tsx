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
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
