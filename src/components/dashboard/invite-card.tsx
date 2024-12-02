'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Users } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

export function InviteCard() {
  const { toast } = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://app.credefi.com/invite');
    toast({
      title: "Success",
      description: "Invite link copied to clipboard",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-semibold">Invite Team Members</CardTitle>
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2"
            onClick={handleCopyLink}
          >
            <Copy className="h-4 w-4" />
            Copy Link
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="rounded-full p-3 bg-blue-500/10">
              <Users className="h-6 w-6 text-blue-500" weight="fill" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-neutral-500">
                Share your environmental impact journey with others and collaborate on sustainability goals
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 