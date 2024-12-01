'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ApiKeyList } from '../api-keys/api-key-list';
import { Book, Globe, ChartLine, ArrowSquareOut } from '@phosphor-icons/react';

export function ApiKeysSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <ApiKeyList />

        <Card>
          <CardHeader>
            <CardTitle>Documentation & Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Book className="h-5 w-5 text-neutral-500" />
                </div>
                <div>
                  <div className="font-medium">API Documentation</div>
                  <div className="text-sm text-neutral-500">
                    Comprehensive API reference and guides
                  </div>
                </div>
                <ArrowSquareOut className="h-4 w-4 ml-auto" />
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-neutral-500" />
                </div>
                <div>
                  <div className="font-medium">Developer Portal</div>
                  <div className="text-sm text-neutral-500">
                    Access SDKs, tools, and examples
                  </div>
                </div>
                <ArrowSquareOut className="h-4 w-4 ml-auto" />
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <ChartLine className="h-5 w-5 text-neutral-500" />
                </div>
                <div>
                  <div className="font-medium">Usage Analytics</div>
                  <div className="text-sm text-neutral-500">
                    Monitor API usage and performance
                  </div>
                </div>
                <ArrowSquareOut className="h-4 w-4 ml-auto" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Webhook Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-neutral-500">
              Test your webhook endpoints with sample payloads for different event types.
            </p>
            <Button variant="outline" className="w-full">
              Open Webhook Tester
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}