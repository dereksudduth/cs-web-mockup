'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from '@phosphor-icons/react';
import { AddressInput } from './address-input';
import { LocationTypeSelect } from './location-type-select';
import { ContactForm } from './contact-form';
import { LocationNotes } from './location-notes';
import { BillingProfileSelector } from './billing-profile-selector';
import { geocodeAddress } from '@/lib/utils/geocoding';
import { useToast } from '@/components/ui/use-toast';
import type { BillingProfile } from '@/lib/types/billing';

interface AddLocationDialogProps {
  onLocationAdd: (location: any) => void;
}

export function AddLocationDialog({ onLocationAdd }: AddLocationDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
    },
    notes: {
      accessNotes: '',
      specialInstructions: '',
      safetyNotes: '',
    },
    contacts: [],
    billingProfileId: '',
    isDefaultBillingProfile: false,
  });

  const handleSubmit = async () => {
    try {
      const geocoded = await geocodeAddress(formData.address);
      const newLocation = {
        ...formData,
        position: {
          lat: geocoded.lat,
          lng: geocoded.lng,
        },
      };
      onLocationAdd(newLocation);
      setOpen(false);
      setFormData({
        name: '',
        type: '',
        address: {
          street: '',
          city: '',
          state: '',
          postalCode: '',
          country: 'US',
        },
        notes: {
          accessNotes: '',
          specialInstructions: '',
          safetyNotes: '',
        },
        contacts: [],
        billingProfileId: '',
        isDefaultBillingProfile: false,
      });
    } catch (error) {
      console.error('Error adding location:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 rounded-full">
          <Plus className="h-4 w-4" />
          Add Location
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Location</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Location Name</Label>
                <Input
                  placeholder="Enter location name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <Label>Location Type</Label>
                <LocationTypeSelect
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                />
              </div>

              <div>
                <Label>Address</Label>
                <AddressInput
                  onAddressSubmit={(address) => setFormData({ ...formData, address })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <ContactForm
              onContactsChange={(contacts) => setFormData({ ...formData, contacts })}
            />
          </TabsContent>

          <TabsContent value="notes">
            <LocationNotes
              value={formData.notes}
              onChange={(notes) => setFormData({ ...formData, notes })}
            />
          </TabsContent>

          <TabsContent value="billing">
            <BillingProfileSelector
              profiles={[]} // Replace with actual billing profiles
              selectedProfileId={formData.billingProfileId}
              isDefault={formData.isDefaultBillingProfile}
              onSelect={(profileId, isDefault) =>
                setFormData({
                  ...formData,
                  billingProfileId: profileId,
                  isDefaultBillingProfile: isDefault,
                })
              }
            />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.type || !formData.address.street}
          >
            Add Location
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}