export interface ApiKey {
  id: string;
  name: string;
  key: string;
  environment: 'sandbox' | 'production';
  status: 'active' | 'inactive';
  createdAt: string;
  lastUsed: string | null;
}