'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Buildings, Calendar, Users } from '@phosphor-icons/react';

interface Project {
  id: string;
  name: string;
  client: string;
  progress: number;
  totalLocations: number;
  completedLocations: number;
  assignedVendors: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'on-hold';
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 'P1',
    name: 'Display Case Removal - Q1',
    client: 'Target Corporation',
    progress: 67,
    totalLocations: 1247,
    completedLocations: 836,
    assignedVendors: 89,
    startDate: '2024-01-15',
    endDate: '2024-03-30',
    status: 'active',
  },
  {
    id: 'P2',
    name: 'Sustainability Upgrade Initiative',
    client: 'Walmart Inc.',
    progress: 42,
    totalLocations: 892,
    completedLocations: 374,
    assignedVendors: 67,
    startDate: '2024-02-01',
    endDate: '2024-05-15',
    status: 'active',
  },
  {
    id: 'P3',
    name: 'Store Equipment Recycling',
    client: 'Best Buy Co.',
    progress: 89,
    totalLocations: 456,
    completedLocations: 406,
    assignedVendors: 45,
    startDate: '2024-01-01',
    endDate: '2024-02-28',
    status: 'completed',
  },
];

interface ProjectListProps {
  searchTerm: string;
}

export function ProjectList({ searchTerm }: ProjectListProps) {
  const router = useRouter();
  const filteredProjects = MOCK_PROJECTS.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-neutral-500">{project.client}</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={() => router.push(`/dashboard/projects/${project.id}`)}
            >
              View Details
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Overall Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Buildings className="h-4 w-4" />
                <span>{project.completedLocations}/{project.totalLocations} Sites</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Users className="h-4 w-4" />
                <span>{project.assignedVendors} Vendors</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4" />
                <span>Starts {new Date(project.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4" />
                <span>Ends {new Date(project.endDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}