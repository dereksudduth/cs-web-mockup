'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Heart, Handshake, GraduationCap } from '@phosphor-icons/react';

const DIVERSITY_DATA = [
  { month: 'Jan', gender: 42, ethnic: 38, disability: 12 },
  { month: 'Feb', gender: 44, ethnic: 39, disability: 13 },
  { month: 'Mar', gender: 45, ethnic: 40, disability: 14 },
  { month: 'Apr', gender: 46, ethnic: 41, disability: 15 },
  { month: 'May', gender: 47, ethnic: 42, disability: 16 },
  { month: 'Jun', gender: 48, ethnic: 43, disability: 17 },
];

export function SocialMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-purple-500/10">
                <Users className="h-6 w-6 text-purple-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">48%</div>
                <div className="text-sm text-neutral-500">Gender Diversity</div>
              </div>
            </div>
            <Progress value={48} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-pink-500/10">
                <Heart className="h-6 w-6 text-pink-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm text-neutral-500">Employee Satisfaction</div>
              </div>
            </div>
            <Progress value={92} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-blue-500/10">
                <Handshake className="h-6 w-6 text-blue-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">$1.2M</div>
                <div className="text-sm text-neutral-500">Community Investment</div>
              </div>
            </div>
            <Progress value={75} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-amber-500/10">
                <GraduationCap className="h-6 w-6 text-amber-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-neutral-500">Training per Employee</div>
              </div>
            </div>
            <Progress value={80} className="mt-4" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Diversity & Inclusion Metrics</CardTitle>
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
              <AreaChart data={DIVERSITY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="gender"
                  name="Gender Diversity"
                  stackId="1"
                  stroke="#8B5CF6"
                  fill="#F3E8FF"
                />
                <Area
                  type="monotone"
                  dataKey="ethnic"
                  name="Ethnic Diversity"
                  stackId="1"
                  stroke="#EC4899"
                  fill="#FCE7F3"
                />
                <Area
                  type="monotone"
                  dataKey="disability"
                  name="Disability Inclusion"
                  stackId="1"
                  stroke="#3B82F6"
                  fill="#DBEAFE"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}