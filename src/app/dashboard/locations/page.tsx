'use client';

import { GoogleMapsWrapper } from '@/components/maps/google-maps-wrapper';
import { LocationsPage } from '@/components/locations/locations-page';

export default function Page() {
  return (
    <div className="space-y-8">
      <GoogleMapsWrapper>
        <LocationsPage />
      </GoogleMapsWrapper>
    </div>
  );
}