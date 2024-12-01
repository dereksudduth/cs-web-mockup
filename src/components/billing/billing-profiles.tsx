'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { BillingProfileForm } from './billing-profile-form';
import { BillingProfileCard } from './billing-profile-card';
import { Plus } from '@phosphor-icons/react';
import type { BillingProfile, BillingProfileFormData } from '@/lib/types/billing';

// Mock data - replace with actual API calls
const MOCK_PROFILES: BillingProfile[] = [
  {
    id: '1',
    name: 'Corporate HQ',
    type: 'business',
    status: 'active',
    billingAddress: {
      street: '123 Business Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
    },
    billingContact: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
    },
    paymentMethod: {
      type: 'credit_card',
      lastFour: '4242',
      expiryDate: '12/24',
    },
    netsuiteId: 'NS-12345',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function BillingProfiles() {
  const [profiles, setProfiles] = useState<BillingProfile[]>(MOCK_PROFILES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<BillingProfile | null>(null);

  const handleProfileSubmit = (data: BillingProfileFormData) => {
    if (editingProfile) {
      setProfiles(prev =>
        prev.map(profile =>
          profile.id === editingProfile.id
            ? {
                ...profile,
                ...data,
                updatedAt: new Date().toISOString(),
              }
            : profile
        )
      );
    } else {
      const newProfile: BillingProfile = {
        id: `${Date.now()}`,
        ...data,
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProfiles(prev => [...prev, newProfile]);
    }
    setIsDialogOpen(false);
    setEditingProfile(null);
  };

  const handleEditProfile = (profile: BillingProfile) => {
    setEditingProfile(profile);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button className="gap-2" onClick={() => setIsDialogOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {profiles.map((profile) => (
          <BillingProfileCard
            key={profile.id}
            profile={profile}
            onEdit={handleEditProfile}
          />
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>
              {editingProfile ? 'Edit Billing Profile' : 'New Billing Profile'}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-8rem)]">
            <div className="p-6">
              <BillingProfileForm
                onSubmit={handleProfileSubmit}
                onCancel={() => {
                  setIsDialogOpen(false);
                  setEditingProfile(null);
                }}
                initialData={editingProfile || undefined}
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}