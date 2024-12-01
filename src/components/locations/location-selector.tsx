'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LocationMap } from '@/components/maps/location-map';
import { NATIONWIDE_LOCATIONS } from '@/lib/data/mock-locations';
import { MapPin, Buildings, Phone, CaretRight, Star } from '@phosphor-icons/react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface LocationSelectorProps {
  onSelect: (location: any) => void;
  selectedLocation: any;
  multiSelect?: boolean;
}

export function LocationSelector({ onSelect, selectedLocation, multiSelect = false }: LocationSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(NATIONWIDE_LOCATIONS);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<any[]>([]);

  useEffect(() => {
    const filtered = NATIONWIDE_LOCATIONS.filter(location =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLocations(filtered);
  }, [searchTerm]);

  const handleLocationSelect = (location: any) => {
    if (multiSelect) {
      const isSelected = selectedLocations.some(loc => loc.id === location.id);
      const newLocations = isSelected
        ? selectedLocations.filter(loc => loc.id !== location.id)
        : [...selectedLocations, location];
      setSelectedLocations(newLocations);
      onSelect(newLocations);
    } else {
      onSelect(location);
      setOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between text-left font-normal"
            >
              {selectedLocation ? (
                <div className="flex items-center gap-2">
                  <Buildings className="h-4 w-4 text-neutral-500" />
                  <span>{selectedLocation.name}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-neutral-500">
                  <MapPin className="h-4 w-4" />
                  <span>Select a location...</span>
                </div>
              )}
              <CaretRight className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-0" align="start">
            <Command>
              <CommandInput 
                placeholder="Search locations..." 
                value={searchTerm}
                onValueChange={setSearchTerm}
              />
              <CommandList>
                <CommandEmpty>No locations found.</CommandEmpty>
                <CommandGroup>
                  {filteredLocations.map((location) => (
                    <CommandItem
                      key={location.id}
                      value={location.name}
                      onSelect={() => handleLocationSelect(location)}
                      onMouseEnter={() => setHoveredLocation(location.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                    >
                      <Buildings className="h-4 w-4 text-neutral-500 mr-2" />
                      <div className="flex flex-col">
                        <span>{location.name}</span>
                        <span className="text-xs text-neutral-500">{location.address}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <LocationMap
            locations={filteredLocations.map(loc => ({
              id: loc.id,
              name: loc.name,
              position: loc.position,
              status: 'Active'
            }))}
            selectedLocation={selectedLocation?.id}
            hoveredLocation={hoveredLocation}
            onLocationSelect={handleLocationSelect}
            className="w-full h-[400px]"
          />
        </CardContent>
      </Card>

      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-50 p-4 rounded-lg border border-neutral-200"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-medium flex items-center gap-2">
                <Buildings className="h-4 w-4 text-neutral-500" />
                {selectedLocation.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{selectedLocation.address}</p>
              <div className="flex items-center gap-2 text-sm text-neutral-500 mt-2">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={() => onSelect(null)}
            >
              Change
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}