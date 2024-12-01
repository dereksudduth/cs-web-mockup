'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Leaf, Recycle, Trash } from '@phosphor-icons/react';

const METRICS = [
  {
    title: 'Waste Diverted',
    value: 75,
    icon: Recycle,
    description: 'Percentage of waste diverted from landfills',
    color: 'text-green-500',
  },
  {
    title: 'Carbon Footprint',
    value: 60,
    icon: Leaf,
    description: 'Reduction in carbon emissions',
    color: 'text-blue-500',
  },
  {
    title: 'Waste Reduction',
    value: 40,
    icon: Trash,
    description: 'Overall waste reduction from previous month',
    color: 'text-orange-500',
  },
];

const TIPS = [
  'Start composting kitchen scraps to reduce organic waste',
  'Use reusable containers instead of single-use plastics',
  'Set up a recycling station in your home',
  'Donate usable items instead of throwing them away',
  'Buy products with minimal packaging',
];

export function SustainabilityReport() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {METRICS.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex-1">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <CardDescription>{metric.description}</CardDescription>
              </div>
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}%</div>
              <Progress value={metric.value} className="mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sustainability Tips</CardTitle>
          <CardDescription>Improve your environmental impact with these suggestions</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {TIPS.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Leaf className="h-5 w-5 mt-0.5 text-green-500" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}