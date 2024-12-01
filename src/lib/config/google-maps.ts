export const GOOGLE_MAPS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  libraries: ['places'] as const,
};

export function validateGoogleMapsConfig(): boolean {
  if (!GOOGLE_MAPS_CONFIG.apiKey) {
    throw new Error('Google Maps API key is not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment variables.');
  }
  return true;
}