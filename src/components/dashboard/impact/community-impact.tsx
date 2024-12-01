'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Tree, HandHeart, Users } from '@phosphor-icons/react';

const IMPACT_STORIES = [
  {
    id: 1,
    title: 'Local Park Restoration',
    description: 'Contributed to planting 100 trees in Central Park',
    impact: '100 trees planted',
    icon: Tree,
    color: 'text-green-500 bg-green-50',
  },
  {
    id: 2,
    title: 'Community Clean-up',
    description: 'Organized beach clean-up with 50 volunteers',
    impact: '500 lbs collected',
    icon: Users,
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 3,
    title: 'Food Waste Program',
    description: 'Donated excess food to local food banks',
    impact: '1,000 meals donated',
    icon: Heart,
    color: 'text-red-500 bg-red-50',
  },
  {
    id: 4,
    title: 'Education Initiative',
    description: 'Sustainability workshops for local schools',
    impact: '500 students reached',
    icon: HandHeart,
    color: 'text-purple-500 bg-purple-50',
  },
];

export function CommunityImpact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {IMPACT_STORIES.map((story) => (
            <div
              key={story.id}
              className="p-4 rounded-lg border border-neutral-200 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${story.color}`}>
                  <story.icon className="h-5 w-5" />
                </div>
                <div className="font-medium">{story.title}</div>
              </div>
              <p className="text-sm text-neutral-500">{story.description}</p>
              <div className="text-sm font-medium text-neutral-900">{story.impact}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}