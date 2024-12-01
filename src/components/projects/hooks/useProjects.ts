import { useState } from 'react';
import type { Project } from '../types';

const MOCK_PROJECTS: Project[] = [
  {
    id: 'P1',
    name: 'Display Case Removal - Q1',
    client: 'Target Corporation',
    description: 'Nationwide removal of display cases from all retail locations',
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
    description: 'Implementation of sustainable waste management systems',
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
    description: 'Recycling of old electronic equipment from stores',
    progress: 89,
    totalLocations: 456,
    completedLocations: 406,
    assignedVendors: 45,
    startDate: '2024-01-01',
    endDate: '2024-02-28',
    status: 'completed',
  },
];

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const addProject = (project: Omit<Project, 'id' | 'progress' | 'status'>) => {
    const newProject: Project = {
      ...project,
      id: `P${Date.now()}`,
      progress: 0,
      status: 'active',
    };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, ...updates } : project
      )
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
  };
}