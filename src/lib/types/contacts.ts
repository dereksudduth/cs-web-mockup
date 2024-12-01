export interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  isPrimary?: boolean;
  isManagerOnDuty?: boolean;
  locationIds: number[];
}