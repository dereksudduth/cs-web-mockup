'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Factory, Leaf, TreeEvergreen, Car, Lightning } from '@phosphor-icons/react';

const EMISSIONS_DATA = [
  { month: 'Jan', direct: 120, indirect: 80, offset: 40 },
  { month: 'Feb', direct: 110, indirect: 75, offset: 45 },
  { month: 'Mar', direct: 130, indirect: 85, offset: 50 },
  { month: 'Apr', direct: 100, indirect: 70, offset: 55 },
  { month: 'May', direct: 90, indirect: 65, offset: 60 },
  { month: 'Jun', direct: 85, indirect: 60, offset: 65 },
];

const REDUCTION_SOURCES = [
  { name: 'Solar Power', value: 35, color: '#F59E0B' },
  { name: 'Electric Vehicles', value: 25, color: '#3B82F6' },
  { name: 'Waste Reduction', value: 20, color: '#10B981' },
  { name: 'Energy Efficiency', value: 15, color: '#6366F1' },
  { name: 'Carbon Offsets', value: 5, color: '#8B5CF6' },
];

export function CarbonDashboard() {
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
                <div className="rounded-full p-3 bg-red-500/10">
                  <Factory className="h-6 w-6 text-red-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    -42%
                  </div>
                  <div className="text-sm text-neutral-500">Carbon Reduction</div>
                </div>
              </div>
              <Progress value={42} className="mt-4" />
              <div className="mt-2 text-xs text-neutral-500">
                vs. 2023 baseline
              </div>
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
                <div className="rounded-full p-3 bg-green-500/10">
                  <TreeEvergreen className="h-6 w-6 text-green-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-neutral-500">Trees Planted</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500 flex items-center gap-1">
                <Leaf className="h-4 w-4" />
                <span>15% above target</span>
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
                <div className="rounded-full p-3 bg-blue-500/10">
                  <Lightning className="h-6 w-6 text-blue-500" weight="fill" />
                </div>
                <div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-neutral-500">Clean Energy Usage</div>
                </div>
              </div>
              <Progress value={85} className="mt-4" />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Carbon Emissions</CardTitle>
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
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={EMISSIONS_DATA}>
                    <defs>
                      <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorIndirect" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOffset" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
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
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="direct"
                      name="Direct Emissions"
                      stroke="#EF4444"
                      fillOpacity={1}
                      fill="url(#colorDirect)"
                    />
                    <Area
                      type="monotone"
                      dataKey="indirect"
                      name="Indirect Emissions"
                      stroke="#F59E0B"
                      fillOpacity={1}
                      fill="url(#colorIndirect)"
                    />
                    <Area
                      type="monotone"
                      dataKey="offset"
                      name="Carbon Offset"
                      stroke="#10B981"
                      fillOpacity={1}
                      fill="url(#colorOffset)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Reduction Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={REDUCTION_SOURCES} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#6B7280" />
                    <YAxis dataKey="name" type="category" stroke="#6B7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Bar dataKey="value" name="Reduction %">
                      {REDUCTION_SOURCES.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}