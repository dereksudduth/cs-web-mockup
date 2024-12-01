export interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  progress: number;
  totalLocations: number;
  completedLocations: number;
  assignedVendors: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'on-hold';
  locations?: any[];
}

export interface ProjectMetric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: string;
  bgColor: string;
}

export interface ProjectFormData {
  name: string;
  client: string;
  description: string;
  startDate: string;
  endDate: string;
  locations: any[];
}