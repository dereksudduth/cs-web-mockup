'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Package, Buildings, Users, Clock, ArrowUp, ArrowDown } from '@phosphor-icons/react';

const METRICS = [
  {
    title: 'Active Requests',
    value: '8,574',
    change: '+37',
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
    title: 'Active Vendors',
    value: '89',
    change: '+12',
    trend: 'up',
    icon: Users,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    title: 'Avg. Response',
    value: '28m',
    change: '-2.3',
    trend: 'down',
    icon: Clock,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
];

export function DashboardMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {METRICS.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-3 ${metric.bgColor}`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} weight="fill" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-500">{metric.title}</div>
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  {metric.change}
                </div>
              </div>
              <Progress value={75} className="mt-4 h-1" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}