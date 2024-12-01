'use client';

import { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { GOOGLE_MAPS_CONFIG } from '@/lib/config/google-maps';

export function useGoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_CONFIG.apiKey,
    libraries: GOOGLE_MAPS_CONFIG.libraries,
  });

  return { isLoaded, loadError };
}