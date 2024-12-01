'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Package, Truck, CheckCircle } from '@phosphor-icons/react';
import { LocationMap } from '@/components/maps/location-map';

interface ServiceRequest {
  id: string;
  status: 'pending' | 'assigned' | 'in_progress' | 'completed';
  location: {
    name: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  driver?: {
    name: string;
    phone: string;
    currentLocation?: {
      lat: number;
      lng: number;
    };
  };
  scheduledTime: string;
  estimatedArrival?: string;
  serviceType: string;
}

const MOCK_REQUEST: ServiceRequest = {
  id: 'SR-12345',
  status: 'in_progress',
  location: {
    name: 'Downtown Office',
    address: '123 Business Ave, New York, NY',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  driver: {
    name: 'John Smith',
    phone: '(555) 123-4567',
    currentLocation: {
      lat: 40.7200,
      lng: -74.0100,
    },
  },
  scheduledTime: '10:30 AM',
  estimatedArrival: '10 mins',
  serviceType: 'Waste Collection',
};

const statusSteps = [
  { status: 'pending', label: 'Request Received', icon: Package },
  { status: 'assigned', label: 'Driver Assigned', icon: Truck },
  { status: 'in_progress', label: 'In Progress', icon: Clock },
  { status: 'completed', label: 'Completed', icon: CheckCircle },
];

export function RequestTracker({ requestId }: { requestId: string }) {
  const [request] = useState<ServiceRequest>(MOCK_REQUEST);

  const currentStepIndex = statusSteps.findIndex(step => step.status === request.status);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Service Request #{request.id}</span>
              <Button variant="outline" size="sm">Contact Driver</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between text-sm">
              <div className="space-y-1">
                <div className="text-neutral-500">Location</div>
                <div className="font-medium">{request.location.name}</div>
                <div className="text-neutral-500">{request.location.address}</div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-neutral-500">Scheduled Time</div>
                <div className="font-medium">{request.scheduledTime}</div>
                {request.estimatedArrival && (
                  <div className="text-green-600">ETA: {request.estimatedArrival}</div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-neutral-100" />
              <div className="space-y-6 relative">
                {statusSteps.map((step, index) => {
                  const isCompleted = index <= currentStepIndex;
                  const isCurrent = index === currentStepIndex;
                  return (
                    <div
                      key={step.status}
                      className="flex items-center gap-4 pl-6"
                    >
                      <div
                        className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                          isCompleted
                            ? 'bg-green-500 border-green-500'
                            : 'bg-white border-neutral-300'
                        }`}
                      />
                      <step.icon
                        className={`h-5 w-5 ${
                          isCompleted ? 'text-green-500' : 'text-neutral-400'
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          isCurrent ? 'text-neutral-900' : 'text-neutral-500'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <LocationMap 
              driverLocation={request.driver?.currentLocation}
              destination={request.location.coordinates}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}