import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { LangSwitcher } from '../lang-switcher';
import { ThemeSwitcher } from '../theme-switcher';
import { Logo } from '../logo/logo';

const Navbar = () => {
  const locale = useLocale();

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 h-16 bg-background border-accent'>
      <div className='h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6'>
        <Link href='/' className='flex items-center gap-3 cursor-pointer'>
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className='hidden md:block' locale={locale} />

        <div className='flex items-center gap-3'>
          <LangSwitcher />
          <ThemeSwitcher />

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
