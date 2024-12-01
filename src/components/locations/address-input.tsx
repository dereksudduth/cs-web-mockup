'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle } from '@phosphor-icons/react';

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
];

const US_STATES = [
  { code: 'CA', name: 'California' },
  { code: 'NY', name: 'New York' },
  // Add more states as needed
];

interface AddressInputProps {
  onAddressSubmit: (address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }) => void;
}

export function AddressInput({ onAddressSubmit }: AddressInputProps) {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'US',
  });

  const [isValid, setIsValid] = useState(false);

  const validateAddress = () => {
    const { street, city, state, postalCode, country } = address;
    const isComplete = street && city && state && postalCode && country;
    
    if (isComplete) {
      setIsValid(true);
      onAddressSubmit(address);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-4 w-4 text-neutral-500" />
        <span className="text-sm font-medium">Enter Address Details</span>
        {isValid && (
          <span className="ml-auto flex items-center gap-1 text-xs text-green-600">
            <CheckCircle className="h-3 w-3" />
            Verified
          </span>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <Label>Street Address</Label>
          <Input
            placeholder="123 Main St"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>City</Label>
            <Input
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>

          <div>
            <Label>State/Province</Label>
            <Input
              placeholder="State"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Postal Code</Label>
            <Input
              placeholder="Postal Code"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
          </div>

          <div>
            <Label>Country</Label>
            <Select
              value={address.country}
              onValueChange={(value) => setAddress({ ...address, country: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          className="w-full mt-4"
          onClick={validateAddress}
          disabled={!address.street || !address.city || !address.state || !address.postalCode}
        >
          Verify Address
        </Button>
      </div>
    </div>
  );
}