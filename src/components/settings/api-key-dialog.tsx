'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { Plus } from '@phosphor-icons/react';

interface ApiKeyDialogProps {
  onSubmit: (data: { name: string; environment: 'sandbox' | 'production' }) => void;
}

export function ApiKeyDialog({ onSubmit }: ApiKeyDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [environment, setEnvironment] = useState<'sandbox' | 'production'>('sandbox');

  const handleSubmit = () => {
    onSubmit({ name, environment });
    setOpen(false);
    setName('');
    setEnvironment('sandbox');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create API Key
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New API Key</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Key Name</Label>
            <Input
              placeholder="Enter a name for this API key"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Environment</Label>
            <RadioGroup
              value={environment}
              onValueChange={(value) => setEnvironment(value as 'sandbox' | 'production')}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sandbox" id="sandbox" />
                  <Label htmlFor="sandbox">Sandbox</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="production" id="production" />
                  <Label htmlFor="production">Production</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!name}>
            Create Key
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}