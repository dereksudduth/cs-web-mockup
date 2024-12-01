'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Buildings, MapPin, User, CreditCard, Bank, Receipt, PencilSimple } from '@phosphor-icons/react';
import type { BillingProfile } from '@/lib/types/billing';

interface BillingProfileCardProps {
  profile: BillingProfile;
  onEdit: (profile: BillingProfile) => void;
}

export function BillingProfileCard({ profile, onEdit }: BillingProfileCardProps) {
  const PaymentIcon = {
    credit_card: CreditCard,
    ach: Bank,
    invoice: Receipt,
  }[profile.paymentMethod.type];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Buildings className="h-4 w-4 text-neutral-500" />
              <span className="font-medium">{profile.name}</span>
              <Badge variant={profile.status === 'active' ? 'default' : 'secondary'}>
                {profile.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <MapPin className="h-4 w-4" />
              {profile.billingAddress.street}, {profile.billingAddress.city},{' '}
              {profile.billingAddress.state} {profile.billingAddress.postalCode}
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(profile)}>
            <PencilSimple className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-neutral-500 mb-1">Billing Contact</div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-neutral-500" />
              <div>
                <div className="text-sm font-medium">{profile.billingContact.name}</div>
                <div className="text-sm text-neutral-500">{profile.billingContact.email}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm text-neutral-500 mb-1">Payment Method</div>
            <div className="flex items-center gap-2">
              <PaymentIcon className="h-4 w-4 text-neutral-500" />
              <div>
                <div className="text-sm font-medium capitalize">
                  {profile.paymentMethod.type.replace('_', ' ')}
                </div>
                {profile.paymentMethod.lastFour && (
                  <div className="text-sm text-neutral-500">
                    •••• {profile.paymentMethod.lastFour}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {profile.netsuiteId && (
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="text-sm text-neutral-500">
              NetSuite ID: {profile.netsuiteId}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}