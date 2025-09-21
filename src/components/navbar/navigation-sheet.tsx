'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import { NavMenu } from './nav-menu';
import { Logo } from '../logo/logo';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';

export const NavigationSheet = () => {
  const t = useTranslations('Praxiotheism');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <VisuallyHidden>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='p-4 flex flex-col gap-4'>
        <Link
          href='/'
          className='flex items-center gap-3 cursor-pointer'
          onClick={handleClose}
        >
          <Logo />
          <p className='text-xl font-bold'>{t('title')}</p>
        </Link>
        <div className='flex-1 overflow-y-auto mt-12'>
          <NavMenu
            orientation='vertical'
            locale={locale}
            onNavigate={handleClose}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
