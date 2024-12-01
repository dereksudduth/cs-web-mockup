'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Buildings, Calendar, Users, Package } from '@phosphor-icons/react';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onSelect: (id: string) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-medium">{project.name}</h3>
            <p className="text-sm text-neutral-500">{project.client}</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full"
            onClick={() => onSelect(project.id)}
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

          <div className="flex items-center gap-2 mt-4">
            <Package className="h-4 w-4 text-neutral-500" />
            <span className={`text-xs px-2 py-1 rounded-full ${
              project.status === 'active' 
                ? 'bg-green-100 text-green-700'
                : project.status === 'completed'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}