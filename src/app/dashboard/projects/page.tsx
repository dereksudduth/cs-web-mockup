'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LocationMap } from '@/components/maps/location-map';
import { ProjectList } from '@/components/projects/project-list';
import { ProjectMetrics } from '@/components/projects/project-metrics';
import { MagnifyingGlass, Plus } from '@phosphor-icons/react';

export default function ProjectsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="text-neutral-500">Manage large-scale specialty jobs across multiple locations</p>
        </div>
        <Button 
          onClick={() => router.push('/dashboard/projects/new')}
          className="gap-2 rounded-full"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <ProjectMetrics />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:row-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Project Locations</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500">12 Active Sites</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <LocationMap
              locations={[]}
              className="w-full h-[600px]"
              showQuickActions={false}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="space-y-4">
              <CardTitle>Active Projects</CardTitle>
              <div className="relative">
                <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 rounded-full"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ProjectList searchTerm={searchTerm} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Total Projects</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Active Sites</span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Assigned Vendors</span>
                <span className="font-medium">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">On-time Completion</span>
                <span className="font-medium">94%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}