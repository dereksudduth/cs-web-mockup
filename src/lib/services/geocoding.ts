import { GOOGLE_MAPS_CONFIG } from '@/lib/config/google-maps';

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface GeocodeResult {
  formatted_address: string;
  lat: number;
  lng: number;
  country: string;
}

export async function geocodeAddress(address: Address): Promise<GeocodeResult> {
  const { street, city, state, postalCode, country } = address;
  const formattedAddress = `${street}, ${city}, ${state} ${postalCode}, ${country}`;
  
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        formattedAddress
      )}&key=${GOOGLE_MAPS_CONFIG.apiKey}`
    );

    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }

    const data = await response.json();

    if (data.status === 'OK' && data.results[0]) {
      const { lat, lng } = data.results[0].geometry.location;
      const countryComponent = data.results[0].address_components.find(
        (component: any) => component.types.includes('country')
      );

      return {
        formatted_address: data.results[0].formatted_address,
        lat,
        lng,
        country: countryComponent?.short_name || country,
      };
    }

    throw new Error('Address not found');
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
}