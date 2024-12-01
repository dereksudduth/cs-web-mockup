'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeSlash, Copy, Trash } from '@phosphor-icons/react';
import { useToast } from '@/components/ui/use-toast';
import type { ApiKey } from '@/lib/types/api';

interface ApiKeyRowProps {
  apiKey: ApiKey;
  onDelete: () => void;
}

export function ApiKeyRow({ apiKey, onDelete }: ApiKeyRowProps) {
  const { toast } = useToast();
  const [showKey, setShowKey] = useState(false);

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "API Key Copied",
      description: "The API key has been copied to your clipboard.",
    });
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-neutral-200">
      <div className="space-y-1">
        <div className="font-medium flex items-center gap-2">
          {apiKey.name}
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            apiKey.environment === 'production'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {apiKey.environment}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <code className="text-sm font-mono bg-neutral-100 px-2 py-0.5 rounded">
            {showKey ? apiKey.key : '•'.repeat(24)}
          </code>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setShowKey(!showKey)}
          >
            {showKey ? (
              <EyeSlash className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => handleCopyKey(apiKey.key)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-neutral-500">
          Created on {new Date(apiKey.createdAt).toLocaleDateString()}
          {apiKey.lastUsed && ` • Last used ${new Date(apiKey.lastUsed).toLocaleDateString()}`}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={onDelete}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}