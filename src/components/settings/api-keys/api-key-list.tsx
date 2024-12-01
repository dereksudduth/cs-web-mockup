'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ApiKeyDialog } from './api-key-dialog';
import { DeleteKeyDialog } from './delete-key-dialog';
import { ApiKeyRow } from './api-key-row';
import { Key } from '@phosphor-icons/react';
import { useToast } from '@/components/ui/use-toast';
import type { ApiKey } from '@/lib/types/api';

export function ApiKeyList() {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [deleteKey, setDeleteKey] = useState<ApiKey | null>(null);

  const handleCreateKey = (data: { name: string; environment: 'sandbox' | 'production' }) => {
    const newKey: ApiKey = {
      id: `key_${Date.now()}`,
      name: data.name,
      key: `cs_${data.environment === 'production' ? 'live' : 'test'}_${Math.random().toString(36).substring(2, 15)}`,
      createdAt: new Date().toISOString(),
      lastUsed: null,
      status: 'active',
      environment: data.environment,
    };
    setApiKeys(prev => [...prev, newKey]);
    toast({
      title: "API Key Created",
      description: "Your new API key has been created successfully.",
    });
  };

  const handleDeleteKey = (key: ApiKey) => {
    setApiKeys(prev => prev.filter(k => k.id !== key.id));
    toast({
      title: "API Key Deleted",
      description: "The API key has been permanently deleted.",
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>API Keys</CardTitle>
        <ApiKeyDialog onSubmit={handleCreateKey} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {apiKeys.map((apiKey) => (
            <ApiKeyRow
              key={apiKey.id}
              apiKey={apiKey}
              onDelete={() => setDeleteKey(apiKey)}
            />
          ))}

          {apiKeys.length === 0 && (
            <div className="text-center py-12">
              <Key className="h-8 w-8 mx-auto text-neutral-400 mb-3" />
              <p className="text-neutral-600">No API keys created yet</p>
              <p className="text-sm text-neutral-500">
                Create an API key to start integrating with our services
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <DeleteKeyDialog
        open={!!deleteKey}
        onOpenChange={() => setDeleteKey(null)}
        onConfirm={() => deleteKey && handleDeleteKey(deleteKey)}
        keyName={deleteKey?.name || ''}
      />
    </Card>
  );
}