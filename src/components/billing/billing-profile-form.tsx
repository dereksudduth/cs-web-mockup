'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AddressInput } from '@/components/locations/address-input';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/lib/utils/format';
import { Buildings, User, CreditCard, Bank, Receipt } from '@phosphor-icons/react';
import type { BillingProfileFormData } from '@/lib/types/billing';

interface BillingProfileFormProps {
  onSubmit: (data: BillingProfileFormData) => void;
  onCancel: () => void;
  initialData?: Partial<BillingProfileFormData>;
}

export function BillingProfileForm({ onSubmit, onCancel, initialData }: BillingProfileFormProps) {
  const [formData, setFormData] = useState<BillingProfileFormData>({
    name: initialData?.name || '',
    type: initialData?.type || 'business',
    billingAddress: initialData?.billingAddress || {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
    },
    billingContact: initialData?.billingContact || {
      name: '',
      email: '',
      phone: '',
    },
    paymentMethod: initialData?.paymentMethod || {
      type: 'credit_card',
    },
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      billingContact: { ...prev.billingContact, phone: formattedPhone },
    }));
    setErrors(prev => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      billingContact: { ...prev.billingContact, email: e.target.value },
    }));
    setErrors(prev => ({ ...prev, email: '' }));
  };

  const handleSubmit = () => {
    let hasErrors = false;
    const newErrors = { email: '', phone: '' };

    if (!validateEmail(formData.billingContact.email)) {
      newErrors.email = 'Invalid email address';
      hasErrors = true;
    }

    if (!validatePhoneNumber(formData.billingContact.phone)) {
      newErrors.phone = 'Invalid phone number';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Profile Name</Label>
          <div className="relative">
            <Buildings className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="Enter profile name"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="pl-9"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Profile Type</Label>
          <RadioGroup
            value={formData.type}
            onValueChange={(value: 'business' | 'individual') =>
              setFormData(prev => ({ ...prev, type: value }))
            }
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="business" id="business" />
              <Label htmlFor="business" className="flex items-center gap-2">
                <Buildings className="h-4 w-4" />
                Business
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="individual" id="individual" />
              <Label htmlFor="individual" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Individual
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Billing Address</Label>
          <AddressInput
            onAddressSubmit={(address) =>
              setFormData(prev => ({ ...prev, billingAddress: address }))
            }
          />
        </div>

        <Card className="p-6 space-y-4">
          <h3 className="font-medium">Billing Contact</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                <Input
                  placeholder="Contact name"
                  value={formData.billingContact.name}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      billingContact: { ...prev.billingContact, name: e.target.value },
                    }))
                  }
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={formData.billingContact.email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                placeholder="(555) 555-5555"
                value={formData.billingContact.phone}
                onChange={handlePhoneChange}
                maxLength={14}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>
        </Card>

        <div className="space-y-2">
          <Label>Payment Method</Label>
          <RadioGroup
            value={formData.paymentMethod.type}
            onValueChange={(value: 'credit_card' | 'ach' | 'invoice') =>
              setFormData(prev => ({
                ...prev,
                paymentMethod: { ...prev.paymentMethod, type: value },
              }))
            }
            className="grid grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit_card" id="credit_card" />
              <Label htmlFor="credit_card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Credit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ach" id="ach" />
              <Label htmlFor="ach" className="flex items-center gap-2">
                <Bank className="h-4 w-4" />
                ACH
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="invoice" id="invoice" />
              <Label htmlFor="invoice" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                Invoice
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={
            !formData.name ||
            !formData.billingAddress.street ||
            !formData.billingContact.name ||
            !formData.billingContact.email ||
            !formData.billingContact.phone
          }
        >
          Save Profile
        </Button>
      </div>
    </div>
  );
}