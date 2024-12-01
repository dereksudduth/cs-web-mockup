'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DeleteKeyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  keyName: string;
}

export function DeleteKeyDialog({ open, onOpenChange, onConfirm, keyName }: DeleteKeyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete API Key</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the API key "{keyName}"? This action cannot be undone
            and will immediately revoke access for any services using this key.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            Delete Key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}