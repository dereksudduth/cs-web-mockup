'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocationMap } from '@/components/maps/location-map';
import { useProjects } from '@/components/projects/hooks/useProjects';
import { ProjectDetailsHeader } from '@/components/projects/project-details-header';
import { ProjectServiceRequests } from '@/components/projects/project-service-requests';
import { ProjectLocations } from '@/components/projects/project-locations';
import { ProjectVendors } from '@/components/projects/project-vendors';

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const { projects } = useProjects();
  const [project] = useState(projects.find(p => p.id === params.id));

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="text-neutral-500">Project not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProjectDetailsHeader project={project} />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-neutral-100 p-1 rounded-full">
          <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
          <TabsTrigger value="locations" className="rounded-full">Locations</TabsTrigger>
          <TabsTrigger value="requests" className="rounded-full">Service Requests</TabsTrigger>
          <TabsTrigger value="vendors" className="rounded-full">Vendors</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <LocationMap
            locations={project.locations?.map(loc => ({
              id: loc.id,
              name: loc.name,
              position: loc.position,
              status: 'Active'
            })) || []}
            className="w-full h-[500px] rounded-lg border border-neutral-200"
            showQuickActions={false}
          />
        </TabsContent>

        <TabsContent value="locations">
          <ProjectLocations projectId={project.id} />
        </TabsContent>

        <TabsContent value="requests">
          <ProjectServiceRequests projectId={project.id} />
        </TabsContent>

        <TabsContent value="vendors">
          <ProjectVendors projectId={project.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}