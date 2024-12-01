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

export const MOCK_CONTACTS: Contact[] = [
  {
    id: 'c1',
    name: 'John Smith',
    role: 'Facility Manager',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    isPrimary: true,
    locationIds: [1, 2],
  },
  {
    id: 'c2',
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    email: 'sarah.j@example.com',
    phone: '(555) 234-5678',
    isManagerOnDuty: true,
    locationIds: [1],
  },
  {
    id: 'c3',
    name: 'Michael Brown',
    role: 'Site Supervisor',
    email: 'm.brown@example.com',
    phone: '(555) 345-6789',
    locationIds: [2, 3],
  },
  {
    id: 'c4',
    name: 'Emily Davis',
    role: 'Environmental Coordinator',
    email: 'emily.d@example.com',
    phone: '(555) 456-7890',
    locationIds: [3, 4],
  },
  {
    id: 'c5',
    name: 'David Wilson',
    role: 'Maintenance Supervisor',
    email: 'd.wilson@example.com',
    phone: '(555) 567-8901',
    isManagerOnDuty: true,
    locationIds: [4, 5],
  }
];