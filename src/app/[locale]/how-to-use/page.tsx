import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HowToUsePage' });

  return {
    title: t('title'),
  };
}

export default function HowToUse() {
  const t = useTranslations('HowToUsePage');

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-8'>
        <p className='text-xl text-muted-foreground'>{t('subtitle')}</p>
      </div>

      <div className='prose prose-lg max-w-none'>
        <h2 className='text-2xl font-bold text-foreground mb-6'>
          {t('gettingStarted.title')}
        </h2>

        <div className='space-y-6'>
          <div className='flex gap-4'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold'>
              {t('gettingStarted.step1.number')}
            </div>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                {t('gettingStarted.step1.title')}
              </h3>
              <p className='text-muted-foreground'>
                {t('gettingStarted.step1.description')}
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold'>
              {t('gettingStarted.step2.number')}
            </div>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                {t('gettingStarted.step2.title')}
              </h3>
              <p className='text-muted-foreground'>
                {t('gettingStarted.step2.description')}
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold'>
              {t('gettingStarted.step3.number')}
            </div>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                {t('gettingStarted.step3.title')}
              </h3>
              <p className='text-muted-foreground'>
                {t('gettingStarted.step3.description')}
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold'>
              {t('gettingStarted.step4.number')}
            </div>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                {t('gettingStarted.step4.title')}
              </h3>
              <p className='text-muted-foreground'>
                {t('gettingStarted.step4.description')}
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold'>
              {t('gettingStarted.step5.number')}
            </div>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                {t('gettingStarted.step5.title')}
              </h3>
              <p className='text-muted-foreground'>
                {t('gettingStarted.step5.description')}
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold'>
              {t('gettingStarted.step6.number')}
            </div>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                {t('gettingStarted.step6.title')}
              </h3>
              <p className='text-muted-foreground'>
                {t('gettingStarted.step6.description')}
              </p>
            </div>
          </div>
        </div>

        <h2 className='text-2xl font-bold text-foreground mb-6 mt-12'>
          {t('advancedTips.title')}
        </h2>

        <div className='space-y-4 text-muted-foreground'>
          <p>{t('advancedTips.tip1')}</p>
          <p>{t('advancedTips.tip2')}</p>
          <p>{t('advancedTips.tip3')}</p>
        </div>

        <h2 className='text-2xl font-bold text-foreground mb-4 mt-12'>
          {t('seeExamples.title')}
        </h2>

        <p className='text-lg text-muted-foreground mb-8'>
          {t('seeExamples.description')}
        </p>
      </div>
    </div>
  );
}
