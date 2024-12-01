'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_LOCALE, type SupportedLocale } from './config';

interface LocaleState {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: DEFAULT_LOCALE,
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'locale-storage',
    }
  )
);