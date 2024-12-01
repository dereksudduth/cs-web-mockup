'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Recycle, Package, Leaf } from '@phosphor-icons/react';

const RECYCLING_DATA = [
  { name: 'Paper', value: 45, color: '#10B981' },
  { name: 'Plastic', value: 25, color: '#3B82F6' },
  { name: 'Glass', value: 15, color: '#6366F1' },
  { name: 'Metal', value: 10, color: '#EC4899' },
  { name: 'Other', value: 5, color: '#8B5CF6' },
];

const DIVERSION_RATE = 78;

export function RecyclingDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-green-500/10">
                  <Recycle className="h-6 w-6 text-green-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {DIVERSION_RATE}%
                  </div>
                  <div className="text-sm text-neutral-500">Diversion Rate</div>
                </div>
              </div>
              <Progress value={DIVERSION_RATE} className="mt-4" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-blue-500/10">
                  <Package className="h-6 w-6 text-blue-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">128.5</div>
                  <div className="text-sm text-neutral-500">Tons Recycled</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500 flex items-center gap-1">
                <Leaf className="h-4 w-4" />
                <span>12% increase from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-indigo-500/10">
                  <Leaf className="h-6 w-6 text-indigo-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">42.8</div>
                  <div className="text-sm text-neutral-500">CO₂ Avoided (tons)</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500 flex items-center gap-1">
                <Leaf className="h-4 w-4" />
                <span>8% increase from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recycling Composition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={RECYCLING_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {RECYCLING_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}