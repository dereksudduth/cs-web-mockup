export const SUPPORTED_LOCALES = {
  'en-US': 'English (US)',
  'en-CA': 'English (Canada)',
  'es-MX': 'Español (México)',
  'fr-CA': 'Français (Canada)',
  'de-DE': 'Deutsch',
  'fr-FR': 'Français',
  'es-ES': 'Español',
  'it-IT': 'Italiano',
} as const;

export type SupportedLocale = keyof typeof SUPPORTED_LOCALES;

export const DEFAULT_LOCALE: SupportedLocale = 'en-US';

export const LOCALE_REGIONS = {
  'en-US': 'NA',
  'en-CA': 'NA',
  'es-MX': 'NA',
  'fr-CA': 'NA',
  'de-DE': 'EU',
  'fr-FR': 'EU',
  'es-ES': 'EU',
  'it-IT': 'EU',
} as const;

export const CURRENCY_FORMATS = {
  'en-US': { currency: 'USD', symbol: '$' },
  'en-CA': { currency: 'CAD', symbol: 'CA$' },
  'es-MX': { currency: 'MXN', symbol: 'MX$' },
  'fr-CA': { currency: 'CAD', symbol: 'CA$' },
  'de-DE': { currency: 'EUR', symbol: '€' },
  'fr-FR': { currency: 'EUR', symbol: '€' },
  'es-ES': { currency: 'EUR', symbol: '€' },
  'it-IT': { currency: 'EUR', symbol: '€' },
} as const;

export const DATE_FORMATS = {
  'en-US': 'MM/dd/yyyy',
  'en-CA': 'yyyy-MM-dd',
  'es-MX': 'dd/MM/yyyy',
  'fr-CA': 'yyyy-MM-dd',
  'de-DE': 'dd.MM.yyyy',
  'fr-FR': 'dd/MM/yyyy',
  'es-ES': 'dd/MM/yyyy',
  'it-IT': 'dd/MM/yyyy',
} as const;