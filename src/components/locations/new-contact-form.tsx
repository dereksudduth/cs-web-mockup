'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Contact } from '@/lib/types/contacts';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/lib/utils/format';
import { EnvelopeSimple, Phone, User, Buildings } from '@phosphor-icons/react';
import { useToast } from '@/components/ui/use-toast';

interface NewContactFormProps {
  initialData?: Contact;
  onSubmit: (contact: Contact) => void;
  onCancel: () => void;
}

export function NewContactForm({ initialData, onSubmit, onCancel }: NewContactFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    role: initialData?.role || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    isPrimary: initialData?.isPrimary || false,
    isManagerOnDuty: initialData?.isManagerOnDuty || false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formattedPhone }));
    setErrors(prev => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    setErrors(prev => ({ ...prev, email: '' }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check the form for errors and try again.",
      });
      return;
    }

    const contact: Contact = {
      id: initialData?.id || `c${Date.now()}`,
      ...formData,
      locationIds: initialData?.locationIds || [],
    };

    onSubmit(contact);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Name *</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="Contact name"
              value={formData.name}
              onChange={e => {
                setFormData(prev => ({ ...prev, name: e.target.value }));
                setErrors(prev => ({ ...prev, name: '' }));
              }}
              className="pl-9"
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Role</Label>
          <div className="relative">
            <Buildings className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="Contact role"
              value={formData.role}
              onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
              className="pl-9"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Phone *</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="(555) 555-5555"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="pl-9"
              maxLength={14}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Email *</Label>
          <div className="relative">
            <EnvelopeSimple className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="email@example.com"
              type="email"
              value={formData.email}
              onChange={handleEmailChange}
              className="pl-9"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <Switch
              checked={formData.isPrimary}
              onCheckedChange={checked => 
                setFormData(prev => ({ ...prev, isPrimary: checked }))
              }
            />
            <Label>Primary Contact</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              checked={formData.isManagerOnDuty}
              onCheckedChange={checked => 
                setFormData(prev => ({ ...prev, isManagerOnDuty: checked }))
              }
            />
            <Label>Manager on Duty</Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          {initialData ? 'Update Contact' : 'Add Contact'}
        </Button>
      </div>
    </Card>
  );
}