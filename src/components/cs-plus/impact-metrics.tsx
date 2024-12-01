'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tree, Leaf, Recycle, Drop } from '@phosphor-icons/react';

const IMPACT_METRICS = [
  {
    title: 'Trees Saved',
    value: 1247,
    unit: 'trees',
    icon: Tree,
    color: 'text-green-500',
    progress: 85,
  },
  {
    title: 'CO2 Reduced',
    value: 42.8,
    unit: 'tons',
    icon: Leaf,
    color: 'text-blue-500',
    progress: 72,
  },
  {
    title: 'Materials Recycled',
    value: 128.5,
    unit: 'tons',
    icon: Recycle,
    color: 'text-indigo-500',
    progress: 65,
  },
  {
    title: 'Water Saved',
    value: 2.4,
    unit: 'million gal',
    icon: Drop,
    color: 'text-cyan-500',
    progress: 90,
  },
];

export function ImpactMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {IMPACT_METRICS.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-3 ${metric.color.replace('text', 'bg')}/10`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} weight="fill" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">
                    {metric.value.toLocaleString()}
                    <span className="text-sm font-normal text-neutral-500 ml-1">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-500">{metric.title}</div>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={metric.progress} className="h-2" />
                <div className="mt-1 text-xs text-neutral-500 text-right">
                  {metric.progress}% of goal
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}