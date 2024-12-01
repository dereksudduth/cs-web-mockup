'use client';

import { formatDistanceToNow } from 'date-fns';
import { Info, CheckCircle, Warning } from '@phosphor-icons/react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  timestamp: Date;
}

interface NotificationItemProps {
  notification: Notification;
}

const NOTIFICATION_ICONS = {
  info: Info,
  success: CheckCircle,
  warning: Warning,
};

const NOTIFICATION_COLORS = {
  info: 'text-blue-500 bg-blue-50 border-blue-100',
  success: 'text-green-500 bg-green-50 border-green-100',
  warning: 'text-amber-500 bg-amber-50 border-amber-100',
};

export function NotificationItem({ notification }: NotificationItemProps) {
  const Icon = NOTIFICATION_ICONS[notification.type];
  const colorClass = NOTIFICATION_COLORS[notification.type];

  return (
    <div className={`p-4 rounded-lg border hover:bg-white/50 transition-colors cursor-pointer ${colorClass}`}>
      <div className="flex gap-4">
        <div className="mt-1">
          <Icon className="h-5 w-5" weight="fill" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="font-medium">{notification.title}</div>
          <p className="text-sm text-neutral-600">{notification.message}</p>
          <p className="text-xs text-neutral-400">
            {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  );
}