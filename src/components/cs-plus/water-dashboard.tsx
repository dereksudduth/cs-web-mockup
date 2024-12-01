'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Drop, Waves, CloudRain } from '@phosphor-icons/react';

const WATER_DATA = [
  { month: 'Jan', usage: 2400, recycled: 1200, rainwater: 800 },
  { month: 'Feb', usage: 2200, recycled: 1100, rainwater: 750 },
  { month: 'Mar', usage: 2600, recycled: 1300, rainwater: 850 },
  { month: 'Apr', usage: 2000, recycled: 1000, rainwater: 700 },
  { month: 'May', usage: 1800, recycled: 900, rainwater: 600 },
  { month: 'Jun', usage: 1700, recycled: 850, rainwater: 550 },
];

export function WaterDashboard() {
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
                <div className="rounded-full p-3 bg-blue-500/10">
                  <Drop className="h-6 w-6 text-blue-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    -35%
                  </div>
                  <div className="text-sm text-neutral-500">Water Usage Reduction</div>
                </div>
              </div>
              <Progress value={35} className="mt-4" />
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
                <div className="rounded-full p-3 bg-cyan-500/10">
                  <Waves className="h-6 w-6 text-cyan-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2.4M</div>
                  <div className="text-sm text-neutral-500">Gallons Saved</div>
                </div>
              </div>
              <Progress value={75} className="mt-4" />
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
                  <CloudRain className="h-6 w-6 text-indigo-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">45%</div>
                  <div className="text-sm text-neutral-500">Rainwater Utilization</div>
                </div>
              </div>
              <Progress value={45} className="mt-4" />
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
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Water Usage Trends</CardTitle>
            <Select defaultValue="6m">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">Last Month</SelectItem>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WATER_DATA}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRecycled" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRainwater" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    name="Total Usage"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorUsage)"
                  />
                  <Area
                    type="monotone"
                    dataKey="recycled"
                    name="Recycled Water"
                    stroke="#10B981"
                    fillOpacity={1}
                    fill="url(#colorRecycled)"
                  />
                  <Area
                    type="monotone"
                    dataKey="rainwater"
                    name="Rainwater"
                    stroke="#6366F1"
                    fillOpacity={1}
                    fill="url(#colorRainwater)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}