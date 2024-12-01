export const googleMapsConfig = {
  googleMapsApiKey: 'AIzaSyCCskGNBAoXt6TUhBbsah5WG76s2yMjKIc',
  libraries: ['places'] as const,
};

export function validateGoogleMapsConfig() {
  if (!googleMapsConfig.googleMapsApiKey) {
    throw new Error('Google Maps API key is not configured');
  }
  return true;
}