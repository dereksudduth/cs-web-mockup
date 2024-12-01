'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BillingProfileForm } from '@/components/billing/billing-profile-form';
import { BillingProfileCard } from '@/components/billing/billing-profile-card';
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

export default function BillingProfilesPage() {
  const [profiles, setProfiles] = useState<BillingProfile[]>(MOCK_PROFILES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<BillingProfile | null>(null);

  const handleProfileSubmit = (data: BillingProfileFormData) => {
    if (editingProfile) {
      // Update existing profile
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
      // Create new profile
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
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Billing Profiles</h1>
          <p className="text-neutral-500">Manage your billing profiles and payment methods</p>
        </div>
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
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingProfile ? 'Edit Billing Profile' : 'New Billing Profile'}
            </DialogTitle>
          </DialogHeader>
          <BillingProfileForm
            onSubmit={handleProfileSubmit}
            onCancel={() => {
              setIsDialogOpen(false);
              setEditingProfile(null);
            }}
            initialData={editingProfile || undefined}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}