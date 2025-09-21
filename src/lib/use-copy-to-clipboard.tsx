'use client';

import * as React from 'react';

export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!value) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setIsCopied(true);

          if (onCopy) {
            onCopy();
          }

          if (timeout !== 0) {
            setTimeout(() => {
              setIsCopied(false);
            }, timeout);
          }
        })
        .catch((error) => {
          console.error('Failed to copy to clipboard:', error);
          fallbackCopyToClipboard(value);
        });
    } else {
      fallbackCopyToClipboard(value);
    }
  };

  const fallbackCopyToClipboard = (value: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        setIsCopied(true);

        if (onCopy) {
          onCopy();
        }

        if (timeout !== 0) {
          setTimeout(() => {
            setIsCopied(false);
          }, timeout);
        }
      } else {
        console.error('Failed to copy using execCommand');
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return { isCopied, copyToClipboard };
}
