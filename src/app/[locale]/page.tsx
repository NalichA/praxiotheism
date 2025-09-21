import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo/logo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
  };
}

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className='font-sans grid grid-rows-[1fr] items-center justify-items-center mt-20 gap-16 sm:p-20'>
      <main className='flex flex-col items-center sm:items-start'>
        <section>
          <div className='flex justify-center mb-10'>
            <Logo size={100} />
          </div>
          <div className='container text-center'>
            <div className='mx-auto flex max-w-5xl flex-col gap-6'>
              <h1 className='text-3xl font-extrabold lg:text-6xl'>
                {t('heading')}
              </h1>
              <p className='text-muted-foreground text-balance lg:text-lg'>
                {t('description')}
              </p>
            </div>

            <div className='flex justify-center italic text-lg font-bold pt-10'>
              {`“${t('quote')}”`}
            </div>
            <div className=''>
              <Button
                size='lg'
                variant='outline'
                className='mt-10 cursor-pointer'
              >
                <Link href='/manifest'>{t('navigation')}</Link>
                <ArrowRight className='size-4' />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
