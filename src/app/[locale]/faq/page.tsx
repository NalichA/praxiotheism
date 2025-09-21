import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { FAQAccordion } from '@/components/faq-accordion';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQPage' });

  return {
    title: t('title'),
  };
}

export default function FAQ() {
  const t = useTranslations('FAQPage');

  return (
    <div className='bg-background'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-4'>
          <p className='text-xl text-muted-foreground'>{t('subtitle')}</p>
        </div>

        <FAQAccordion />

        {/* Contact Section */}
        <div className='mt-16 text-center'>
          <div className='max-w-2xl mx-auto'>
            <h2 className='text-2xl font-bold text-foreground mb-4'>
              {t('contactTitle')}
            </h2>
            <p className='text-muted-foreground mb-6'>
              {t('contactText')}{' '}
              <a
                href='mailto:info@praxiotheism.org'
                className='text-foreground font-medium hover:underline'
              >
                {t('email')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
