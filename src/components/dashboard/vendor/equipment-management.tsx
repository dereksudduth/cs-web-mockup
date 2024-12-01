'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Truck, Calendar, Gear } from '@phosphor-icons/react';

const EQUIPMENT = [
  {
    id: 1,
    type: 'Garbage Truck',
    model: 'Mack TerraPro',
    status: 'Active',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-03-15',
  },
  {
    id: 2,
    type: 'Recycling Truck',
    model: 'Peterbilt 520',
    status: 'Maintenance',
    lastMaintenance: '2024-02-01',
    nextMaintenance: '2024-04-01',
  },
  {
    id: 3,
    type: 'Roll-off Truck',
    model: 'Kenworth T880',
    status: 'Active',
    lastMaintenance: '2024-01-30',
    nextMaintenance: '2024-03-30',
  },
];

export function EquipmentManagement() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Equipment</CardTitle>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Equipment
        </Button>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-neutral-200">
          {EQUIPMENT.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-neutral-500" />
                  <span className="font-medium">{item.type}</span>
                  <span className="text-sm text-neutral-500">- {item.model}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    Last maintained: {item.lastMaintenance}
                  </div>
                  <div className="flex items-center gap-1 text-neutral-500">
                    <Gear className="h-4 w-4" />
                    Next service: {item.nextMaintenance}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    item.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {item.status}
                </span>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}