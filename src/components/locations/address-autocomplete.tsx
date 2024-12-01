'use client';

import { useState } from 'react';
import { useGoogleMaps } from '@/lib/google-maps/google-maps-provider';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { MapPin } from '@phosphor-icons/react';

interface AddressAutocompleteProps {
  onSelect: (address: {
    formatted_address: string;
    lat: number;
    lng: number;
    country: string;
  }) => void;
  defaultValue?: string;
}

export function AddressAutocomplete({ onSelect, defaultValue }: AddressAutocompleteProps) {
  const { isLoaded, loadError } = useGoogleMaps();
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: ['us', 'ca', 'mx'] },
    },
    defaultValue,
    callbackName: 'initPlacesAutocomplete',
    initOnMount: isLoaded,
  });

  if (loadError) {
    return (
      <div className="p-4 text-sm text-red-600 bg-red-50 rounded-lg">
        Error loading Google Maps API. Please try again later.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="p-4 text-sm text-neutral-600 bg-neutral-50 rounded-lg animate-pulse">
        Loading address search...
      </div>
    );
  }

  const handleSelect = async (address: string) => {
    setIsLoading(true);
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ 
        address,
        componentRestrictions: {
          country: ['us', 'ca', 'mx']
        }
      });
      
      const { lat, lng } = await getLatLng(results[0]);
      const country = results[0].address_components.find(
        (component) => component.types.includes('country')
      )?.short_name;

      onSelect({
        formatted_address: results[0].formatted_address,
        lat,
        lng,
        country: country || '',
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Command className="border rounded-lg">
      <div className="flex items-center px-3">
        <MapPin className="h-4 w-4 text-neutral-500" />
        <CommandInput
          placeholder="Enter address..."
          value={value}
          onValueChange={setValue}
          disabled={!ready || isLoading}
          className="flex-1 border-0 focus:ring-0"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2"
            onClick={() => {
              setValue('');
              clearSuggestions();
            }}
          >
            Clear
          </Button>
        )}
      </div>
      {status === "OK" && (
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {data.map(({ place_id, description }) => (
              <CommandItem
                key={place_id}
                value={description}
                onSelect={() => handleSelect(description)}
              >
                <MapPin className="mr-2 h-4 w-4 text-neutral-500" />
                {description}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
}