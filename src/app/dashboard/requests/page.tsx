'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  CaretRight, 
  MagnifyingGlass, 
  Lightning, 
  ArrowClockwise,
  Clock,
  CheckCircle,
  XCircle,
  FunnelSimple,
  Export,
  ChartLineUp,
  Package,
  Truck,
  ArrowUp,
  ArrowDown
} from '@phosphor-icons/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CHART_DATA = [
  { date: '2024-01', emergency: 12, standard: 45, recurring: 28 },
  { date: '2024-02', emergency: 15, standard: 42, recurring: 30 },
  { date: '2024-03', emergency: 8, standard: 48, recurring: 32 },
  { date: '2024-04', emergency: 10, standard: 50, recurring: 35 },
  { date: '2024-05', emergency: 14, standard: 46, recurring: 38 },
  { date: '2024-06', emergency: 11, standard: 52, recurring: 40 },
];

const REQUESTS = [
  {
    id: 'SR-12345',
    service: 'Waste Collection',
    location: 'Manhattan Office Complex',
    status: 'In Progress',
    date: '2024-02-25',
    time: '09:00 AM',
    isEmergency: true,
    isRecurring: false,
  },
  {
    id: 'SR-12346',
    service: 'Recycling',
    location: 'Boston Tech Center',
    status: 'Scheduled',
    date: '2024-02-26',
    time: '10:30 AM',
    isEmergency: false,
    isRecurring: true,
  },
  // ... other requests
];

const STATUS_COLORS = {
  'Scheduled': 'text-blue-600 bg-blue-50',
  'In Progress': 'text-amber-600 bg-amber-50',
  'Completed': 'text-green-600 bg-green-50',
  'Cancelled': 'text-red-600 bg-red-50',
};

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
    title: 'Response Time',
    value: '28m',
    change: '-5',
    trend: 'down',
    icon: Clock,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
  {
    title: 'Completion Rate',
    value: '94%',
    change: '+2.5',
    trend: 'up',
    icon: ChartLineUp,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'In Progress',
    value: '12',
    change: '+3',
    trend: 'up',
    icon: Truck,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
  },
];

export default function RequestsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [dateRange, setDateRange] = useState('7d');

  const filteredRequests = REQUESTS.filter(request => {
    const matchesSearch = 
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    const matchesType = typeFilter === 'all' || 
      (typeFilter === 'emergency' && request.isEmergency) ||
      (typeFilter === 'recurring' && request.isRecurring);

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Service Requests</h1>
          <p className="text-neutral-500">Track and manage your service requests</p>
        </div>
        <Button 
          className="new-request-button gap-2 rounded-full"
          onClick={() => router.push('/dashboard/requests/new')}
        >
          <Plus className="h-4 w-4" />
          New Request <CaretRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {METRICS.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-3 ${metric.bgColor}`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} weight="fill" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">{metric.value}</div>
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
                  {metric.change}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CardTitle>Request Volume</CardTitle>
            <Select defaultValue={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorEmergency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRecurring" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" stroke="#6B7280" />
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
                  dataKey="emergency"
                  name="Emergency"
                  stroke="#EF4444"
                  fillOpacity={1}
                  fill="url(#colorEmergency)"
                />
                <Area
                  type="monotone"
                  dataKey="standard"
                  name="Standard"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorStandard)"
                />
                <Area
                  type="monotone"
                  dataKey="recurring"
                  name="Recurring"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorRecurring)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px] rounded-full">
                  <FunnelSimple className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Scheduled">Scheduled</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[140px] rounded-full">
                  <FunnelSimple className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="recurring">Recurring</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 rounded-full">
                <Export className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Request ID</th>
                    <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Service</th>
                    <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Location</th>
                    <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Status</th>
                    <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Date & Time</th>
                    <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Type</th>
                    <th className="text-right text-sm font-medium text-neutral-500 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {filteredRequests.map((request) => (
                    <tr 
                      key={request.id}
                      className="hover:bg-neutral-50 transition-colors cursor-pointer"
                      onClick={() => router.push(`/dashboard/requests/${request.id}`)}
                    >
                      <td className="px-4 py-3 text-sm font-medium">{request.id}</td>
                      <td className="px-4 py-3 text-sm">{request.service}</td>
                      <td className="px-4 py-3 text-sm">{request.location}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[request.status]}`}>
                          {request.status === 'In Progress' && <Clock className="mr-1 h-3 w-3" />}
                          {request.status === 'Completed' && <CheckCircle className="mr-1 h-3 w-3" />}
                          {request.status === 'Cancelled' && <XCircle className="mr-1 h-3 w-3" />}
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {new Date(request.date).toLocaleDateString()} {request.time}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          {request.isEmergency && (
                            <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                              <Lightning className="h-3 w-3" weight="fill" />
                              Emergency
                            </span>
                          )}
                          {request.isRecurring && (
                            <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                              <ArrowClockwise className="h-3 w-3" weight="fill" />
                              Recurring
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-full"
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}