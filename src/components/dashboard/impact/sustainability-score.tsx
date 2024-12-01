'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

const SCORE_CATEGORIES = [
  { name: 'Waste Diversion', score: 85, weight: 0.3 },
  { name: 'Carbon Footprint', score: 78, weight: 0.3 },
  { name: 'Water Conservation', score: 92, weight: 0.2 },
  { name: 'Sustainable Practices', score: 88, weight: 0.2 },
];

export function SustainabilityScore() {
  const overallScore = SCORE_CATEGORIES.reduce(
    (acc, category) => acc + category.score * category.weight,
    0
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sustainability Score</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-8 border-green-100 flex items-center justify-center">
              <div className="text-4xl font-bold text-green-600">{Math.round(overallScore)}</div>
            </div>
            <Star 
              weight="fill"
              className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400"
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          {SCORE_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm text-neutral-500">{category.score}%</span>
              </div>
              <Progress value={category.score} className="h-2" />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}