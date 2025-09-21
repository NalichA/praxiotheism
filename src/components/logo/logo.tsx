'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import logoWhite from './logo-white.svg';
import logoDark from './logo-dark.svg';

export const Logo = ({
  size = 24,
  className = '',
}: {
  size?: number;
  className?: string;
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src={logoDark}
        alt='Logo'
        width={size}
        height={size}
        className={className}
      />
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <Image
      src={currentTheme === 'dark' ? logoWhite : logoDark}
      alt='Logo'
      width={size}
      height={size}
      className={className}
    />
  );
};
