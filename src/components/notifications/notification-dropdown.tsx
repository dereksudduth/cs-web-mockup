'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell } from '@phosphor-icons/react';
import { NotificationItem } from './notification-item';

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    title: 'New Service Request',
    message: 'A new service request has been created for Manhattan Office',
    type: 'info',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
  },
  {
    id: '2',
    title: 'Request Completed',
    message: 'Service request #SR-12345 has been completed',
    type: 'success',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: '3',
    title: 'Emergency Request',
    message: 'Emergency service request received for Boston Location',
    type: 'warning',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
  },
];

export function NotificationDropdown() {
  const [notifications] = useState(MOCK_NOTIFICATIONS);
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.length;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full"
          aria-label={`Notifications (${unreadCount} unread)`}
        >
          <Bell className="h-5 w-5 text-neutral-300" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Notifications</span>
            {unreadCount > 0 && (
              <span className="text-sm font-normal text-neutral-500">
                {unreadCount} unread
              </span>
            )}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] mt-6">
          <div className="space-y-1">
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
            {notifications.length === 0 && (
              <div className="p-8 text-center text-neutral-500">
                <Bell className="h-8 w-8 mx-auto mb-3 text-neutral-400" />
                <p>No notifications to display</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}