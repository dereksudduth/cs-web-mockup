'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { CURRENCY_FORMATS, DATE_FORMATS, SUPPORTED_LOCALES, type SupportedLocale } from './config';
import { useLocaleStore } from './store';

export function useLocale() {
  const { locale, setLocale } = useLocaleStore();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = useCallback((newLocale: SupportedLocale) => {
    setLocale(newLocale);
    // Optionally redirect to localized route
    // router.push(`/${newLocale}${pathname}`);
  }, [setLocale, router, pathname]);

  const formatCurrency = useCallback((amount: number) => {
    const { currency, symbol } = CURRENCY_FORMATS[locale];
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(amount);
  }, [locale]);

  const formatDate = useCallback((date: Date | string) => {
    const dateFormat = DATE_FORMATS[locale];
    return format(new Date(date), dateFormat);
  }, [locale]);

  const formatNumber = useCallback((number: number) => {
    return new Intl.NumberFormat(locale).format(number);
  }, [locale]);

  return {
    locale,
    locales: SUPPORTED_LOCALES,
    changeLocale,
    formatCurrency,
    formatDate,
    formatNumber,
  };
}