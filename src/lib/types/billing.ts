export interface BillingProfile {
  id: string;
  name: string;
  type: 'business' | 'individual';
  status: 'active' | 'inactive';
  billingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  billingContact: {
    name: string;
    email: string;
    phone: string;
  };
  paymentMethod: {
    type: 'credit_card' | 'ach' | 'invoice';
    lastFour?: string;
    expiryDate?: string;
  };
  netsuiteId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BillingProfileFormData {
  name: string;
  type: 'business' | 'individual';
  billingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  billingContact: {
    name: string;
    email: string;
    phone: string;
  };
  paymentMethod: {
    type: 'credit_card' | 'ach' | 'invoice';
  };
}