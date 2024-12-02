'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Buildings, Package } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/ui/map'), { ssr: false });

const SITES = [
  {
    id: 1,
    name: 'Downtown Office Complex',
    address: '123 Business Ave, NY 10001',
    lat: 40.7128,
    lng: -74.0060,
    activeServices: 3,
    status: 'active',
  },
  {
    id: 2,
    name: 'Westside Shopping Center',
    address: '456 Retail Blvd, NY 10002',
    lat: 40.7589,
    lng: -73.9851,
    activeServices: 5,
    status: 'attention',
  },
  // Add more sites as needed
];

export function SiteOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Site Overview</CardTitle>
        <div className="flex gap-2">
          <div className="text-sm text-neutral-500">
            <span className="font-medium text-neutral-900">247</span> Total Sites
          </div>
          <div className="text-sm text-neutral-500">
            <span className="font-medium text-green-500">235</span> Active
          </div>
          <div className="text-sm text-neutral-500">
            <span className="font-medium text-yellow-500">12</span> Attention Needed
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <Map sites={SITES} />
        </div>
        <div className="mt-4 space-y-4">
          {SITES.slice(0, 3).map((site) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 rounded-lg border border-neutral-200"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full p-2 bg-blue-500/10">
                  <Buildings className="h-5 w-5 text-blue-500" weight="fill" />
                </div>
                <div>
                  <div className="font-medium">{site.name}</div>
                  <div className="text-sm text-neutral-500">{site.address}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-neutral-500">
                  {site.activeServices} Active Services
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${
                  site.status === 'active' 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {site.status === 'active' ? 'Active' : 'Attention Needed'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 