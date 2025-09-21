'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
  const t = useTranslations('ManifestPage');
  const [activeSection, setActiveSection] = useState<string>('');

  // Define the sections with their IDs and titles
  const sections = [
    { id: 'I_whoWeAre', title: t('I_whoWeAre.title') },
    { id: 'II_fundamentals', title: t('II_fundamentals.title') },
    { id: 'IIA_natureOfGod', title: t('IIA_natureOfGod.title') },
    { id: 'III_practices', title: t('III_practices.title') },
    { id: 'IV_structure', title: t('IV_structure.title') },
    { id: 'V_symbolism', title: t('V_symbolism.title') },
    {
      id: 'VI_recruitsAndInitiation',
      title: t('VI_recruitsAndInitiation.title'),
    },
    { id: 'VII_principles', title: t('VII_principles.title') },
    { id: 'VIII_goals', title: t('VIII_goals.title') },
    { id: 'IX_ourFaith', title: t('IX_ourFaith.title') },
    { id: 'X_originOfTerm', title: t('X_originOfTerm.title') },
    {
      id: 'XI_praxiotheismAndOtherReligions',
      title: t('XI_praxiotheismAndOtherReligions.title'),
    },
    { id: 'XII_afterlife', title: t('XII_afterlife.title') },
    { id: 'XIII_goodAndEvil', title: t('XIII_goodAndEvil.title') },
    {
      id: 'XIV_practicesForJudging',
      title: t('XIV_practicesForJudging.title'),
    },
    { id: 'XV_notes', title: t('XV_notes.title') },
  ];

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Offset for better UX and navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`${className}`}>
      <ul className='space-y-1'>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`text-left text-sm transition-colors hover:cursor-pointer ${
                activeSection === section.id ? 'underline' : ''
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
