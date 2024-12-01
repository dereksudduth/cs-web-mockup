'use client';

import { googleMapsConfig } from '../google-maps/config';

export async function geocodeAddress(address: {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}) {
  const { street, city, state, postalCode, country } = address;
  const formattedAddress = `${street}, ${city}, ${state} ${postalCode}, ${country}`;
  
  try {
    const geocoder = new window.google.maps.Geocoder();
    
    const result = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
      geocoder.geocode(
        { address: formattedAddress },
        (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        }
      );
    });

    if (result[0]) {
      const { location } = result[0].geometry;
      const countryComponent = result[0].address_components.find(
        (component) => component.types.includes('country')
      );

      return {
        formatted_address: result[0].formatted_address,
        lat: location.lat(),
        lng: location.lng(),
        country: countryComponent?.short_name || country,
      };
    }

    throw new Error('Address not found');
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
}