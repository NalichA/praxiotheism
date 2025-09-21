import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to get all available question keys from translations in their original order
export function getQuestionKeysFromTranslations(
  messages: Record<string, unknown>
): string[] {
  const faq = messages?.FAQPage as Record<string, unknown> | undefined;
  const faqQuestions = faq?.questions as Record<string, unknown> | undefined;
  if (!faqQuestions) return [];

  // Get all keys that have both question and answer properties
  // Object.keys preserves the order of properties as they appear in the JSON
  return Object.keys(faqQuestions).filter((key) => {
    const question = faqQuestions[key] as Record<string, unknown> | undefined;
    return (
      question &&
      typeof question === 'object' &&
      'question' in question &&
      'answer' in question
    );
  });
}
