'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { IconProps } from '@phosphor-icons/react';

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
  color: string;
  progress: number;
  index: number;
}

export function MetricCard({ title, value, unit, icon: Icon, color, progress, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`rounded-full p-3 ${color.replace('text', 'bg')}/10`}>
              <Icon className={`h-6 w-6 ${color}`} weight="fill" />
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold">
                {value.toLocaleString()}
                <span className="text-sm font-normal text-neutral-500 ml-1">
                  {unit}
                </span>
              </div>
              <div className="text-sm text-neutral-500">{title}</div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <div className="mt-1 text-xs text-neutral-500 text-right">
              {progress}% of goal
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}