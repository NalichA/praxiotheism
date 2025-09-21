'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface NavMenuProps extends NavigationMenuProps {
  locale: string;
  onNavigate?: () => void;
}

export const NavMenu = ({ locale, onNavigate, ...props }: NavMenuProps) => {
  const t = useTranslations('Navigation');

  const navigationItems = [
    // { href: '/', translationKey: 'home' },
    { href: '/manifest', translationKey: 'manifest' },
    { href: '/how-to-use', translationKey: 'howToUse' },
    { href: '/archive', translationKey: 'archive' },
    { href: '/faq', translationKey: 'faq' },
  ];

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className='gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link href={item.href} onClick={handleClick}>
                {t(item.translationKey)}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
