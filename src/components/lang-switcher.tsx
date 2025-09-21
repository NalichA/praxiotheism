'use client';

import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LangSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const otherLocale = routing.locales.find((l) => l !== locale);
  if (!otherLocale) return null;

  return (
    <Button variant='ghost' asChild>
      <Link
        href={pathname}
        locale={otherLocale}
        className='flex items-center gap-1'
      >
        <Globe className='h-4 w-4' />
        {otherLocale.toUpperCase()}
      </Link>
    </Button>
  );
};
