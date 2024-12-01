'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Certificate, Download, Plus, TreeEvergreen } from '@phosphor-icons/react';

const CERTIFICATES = [
  {
    id: 'CERT-001',
    name: 'Carbon Offset Certificate',
    issuedDate: '2024-02-01',
    credits: 500,
    type: 'carbon_offset',
    status: 'active',
  },
  {
    id: 'CERT-002',
    name: 'Recycling Impact Certificate',
    issuedDate: '2024-01-15',
    credits: 750,
    type: 'recycling',
    status: 'active',
  },
];

export function CertificateDashboard() {
  const [certificates] = useState(CERTIFICATES);
  
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-green-500/10">
                <Certificate className="h-6 w-6 text-green-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,250</div>
                <div className="text-sm text-neutral-500">Total Credits</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-blue-500/10">
                <TreeEvergreen className="h-6 w-6 text-blue-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">42.8</div>
                <div className="text-sm text-neutral-500">CO₂ Offset (tons)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-sm text-neutral-500">Market Value</div>
                <div className="text-2xl font-bold">$12,500</div>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Purchase Credits
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sustainability Certificates</CardTitle>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search certificates..."
                className="w-[200px]"
              />
              <Button variant="outline">Generate Report</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Certificate ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">{cert.id}</TableCell>
                  <TableCell>{cert.name}</TableCell>
                  <TableCell>{new Date(cert.issuedDate).toLocaleDateString()}</TableCell>
                  <TableCell>{cert.credits}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {cert.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}