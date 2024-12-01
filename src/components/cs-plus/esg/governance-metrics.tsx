'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, Users, Scales, Flag } from '@phosphor-icons/react';

const COMPLIANCE_RECORDS = [
  {
    id: 1,
    policy: 'Data Privacy Policy',
    lastReview: '2024-01-15',
    status: 'Compliant',
    score: 98,
  },
  {
    id: 2,
    policy: 'Ethics Guidelines',
    lastReview: '2024-02-01',
    status: 'Compliant',
    score: 100,
  },
  {
    id: 3,
    policy: 'Risk Management',
    lastReview: '2024-01-30',
    status: 'Review Required',
    score: 85,
  },
  {
    id: 4,
    policy: 'Board Diversity',
    lastReview: '2024-02-15',
    status: 'Compliant',
    score: 95,
  },
];

export function GovernanceMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-indigo-500/10">
                <Shield className="h-6 w-6 text-indigo-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-neutral-500">Compliance Score</div>
              </div>
            </div>
            <Progress value={95} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-emerald-500/10">
                <Users className="h-6 w-6 text-emerald-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">45%</div>
                <div className="text-sm text-neutral-500">Board Diversity</div>
              </div>
            </div>
            <Progress value={45} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-blue-500/10">
                <Scales className="h-6 w-6 text-blue-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-neutral-500">Ethics Training</div>
              </div>
            </div>
            <Progress value={100} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 bg-red-500/10">
                <Flag className="h-6 w-6 text-red-500" weight="fill" />
              </div>
              <div>
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-neutral-500">Incidents Reported</div>
              </div>
            </div>
            <Progress value={100} className="mt-4" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compliance & Policy Review</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy</TableHead>
                <TableHead>Last Review</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPLIANCE_RECORDS.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.policy}</TableCell>
                  <TableCell>{new Date(record.lastReview).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        record.status === 'Compliant'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {record.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={record.score} className="w-24" />
                      <span className="text-sm font-medium">{record.score}%</span>
                    </div>
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