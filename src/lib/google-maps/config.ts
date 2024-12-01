export const GOOGLE_MAPS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  libraries: ['places', 'geometry'] as const,
  region: 'US',
  language: 'en',
  version: 'weekly'
} as const;

export const MAP_DEFAULTS = {
  center: { lat: 39.8283, lng: -98.5795 },
  zoom: 4,
  options: {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    streetViewControl: false,
    gestureHandling: 'greedy',
  },
  styles: [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [{ color: '#f5f5f5' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#e9e9e9' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }],
    },
  ],
} as const;

export function validateGoogleMapsConfig() {
  if (!GOOGLE_MAPS_CONFIG.apiKey) {
    throw new Error('Google Maps API key is not configured. Please check your environment variables.');
  }
  return true;
}