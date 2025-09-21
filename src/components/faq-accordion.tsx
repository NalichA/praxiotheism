'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations, useMessages } from 'next-intl';
import { getQuestionKeysFromTranslations } from '@/lib/utils';

function useQuestionKeys() {
  const messages = useMessages();

  return React.useMemo(() => {
    return getQuestionKeysFromTranslations(messages);
  }, [messages]);
}

export function FAQAccordion() {
  const t = useTranslations('FAQPage.questions');
  const questionKeys = useQuestionKeys();
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className='space-y-4'>
      {questionKeys.map((key, index) => (
        <div key={index} className='overflow-hidden'>
          <button
            onClick={() => toggleItem(index)}
            className='w-full px-6 py-4 text-left flex justify-between items-center transition-all duration-300 ease-in-out cursor-pointer'
          >
            <h3 className='text-base md:text-lg font-semibold text-foreground'>
              {t(`${key}.question`)}
            </h3>
            <div className='transition-transform duration-300 ease-in-out'>
              {openItems.includes(index) ? (
                <ChevronUp className='h-5 w-5 text-muted-foreground transform rotate-0' />
              ) : (
                <ChevronDown className='h-5 w-5 text-muted-foreground transform rotate-0' />
              )}
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(index)
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className='px-6 pb-4'>
              <p className='text-muted-foreground leading-relaxed'>
                {t(`${key}.answer`)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
