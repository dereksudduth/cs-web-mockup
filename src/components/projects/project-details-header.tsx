'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Buildings, Calendar, Users, Download } from '@phosphor-icons/react';
import type { Project } from './types';

interface ProjectDetailsHeaderProps {
  project: Project;
}

export function ProjectDetailsHeader({ project }: ProjectDetailsHeaderProps) {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          <p className="text-neutral-500">{project.client}</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-full">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-blue-500/10">
                  <Buildings className="h-6 w-6 text-blue-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{project.totalLocations}</div>
                  <div className="text-sm text-neutral-500">Total Locations</div>
                </div>
              </div>
              <Progress value={(project.completedLocations / project.totalLocations) * 100} className="mt-4" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-green-500/10">
                  <Buildings className="h-6 w-6 text-green-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{project.completedLocations}</div>
                  <div className="text-sm text-neutral-500">Completed Sites</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500">
                {((project.completedLocations / project.totalLocations) * 100).toFixed(1)}% complete
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-purple-500/10">
                  <Users className="h-6 w-6 text-purple-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{project.assignedVendors}</div>
                  <div className="text-sm text-neutral-500">Assigned Vendors</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-amber-500/10">
                  <Calendar className="h-6 w-6 text-amber-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {new Date(project.endDate).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-neutral-500">Target Date</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm text-neutral-500">Overall Progress</div>
                  <div className="text-2xl font-bold">{project.progress}%</div>
                </div>
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Start Date</span>
                  <span className="font-medium">
                    {new Date(project.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">End Date</span>
                  <span className="font-medium">
                    {new Date(project.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}