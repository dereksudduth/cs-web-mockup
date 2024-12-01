import { Package, Buildings, Users, Clock } from '@phosphor-icons/react';
import type { ProjectMetric } from '../types';

export function useProjectMetrics() {
  const metrics: ProjectMetric[] = [
    {
      title: 'Active Projects',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: Package,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Total Locations',
      value: '1,247',
      change: '+156',
      trend: 'up',
      icon: Buildings,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Assigned Vendors',
      value: '89',
      change: '+12',
      trend: 'up',
      icon: Users,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Avg. Completion',
      value: '18.5d',
      change: '-2.3',
      trend: 'down',
      icon: Clock,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return { metrics };
}