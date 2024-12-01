'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TreeEvergreen, Drop, Factory, Sun } from '@phosphor-icons/react';

const EMISSIONS_DATA = [
  { month: 'Jan', scope1: 120, scope2: 80, scope3: 200 },
  { month: 'Feb', scope1: 110, scope2: 75, scope3: 180 },
  { month: 'Mar', scope1: 130, scope2: 85, scope3: 220 },
  { month: 'Apr', scope1: 100, scope2: 70, scope3: 170 },
  { month: 'May', scope1: 90, scope2: 65, scope3: 150 },
  { month: 'Jun', scope1: 85, scope2: 60, scope3: 140 },
];

export function EnvironmentalMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-green-500/10">
                <Factory className="h-6 w-6 text-green-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">42%</div>
                <div className="text-sm text-neutral-500">Carbon Reduction</div>
              </div>
            </div>
            <Progress value={42} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-blue-500/10">
                <Drop className="h-6 w-6 text-blue-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">2.4M</div>
                <div className="text-sm text-neutral-500">Water Saved (gal)</div>
              </div>
            </div>
            <Progress value={75} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-yellow-500/10">
                <Sun className="h-6 w-6 text-yellow-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-neutral-500">Clean Energy</div>
              </div>
            </div>
            <Progress value={85} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-emerald-500/10">
                <TreeEvergreen className="h-6 w-6 text-emerald-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-neutral-500">Trees Planted</div>
              </div>
            </div>
            <Progress value={65} className="mt-4" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>GHG Emissions</CardTitle>
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
              <AreaChart data={EMISSIONS_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="scope1"
                  name="Scope 1"
                  stackId="1"
                  stroke="#EF4444"
                  fill="#FEE2E2"
                />
                <Area
                  type="monotone"
                  dataKey="scope2"
                  name="Scope 2"
                  stackId="1"
                  stroke="#F59E0B"
                  fill="#FEF3C7"
                />
                <Area
                  type="monotone"
                  dataKey="scope3"
                  name="Scope 3"
                  stackId="1"
                  stroke="#10B981"
                  fill="#D1FAE5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}