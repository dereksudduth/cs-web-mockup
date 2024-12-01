'use client';

import { createContext, useContext, useState } from 'react';
import { Toast, ToastProvider, ToastViewport } from '@/components/ui/toast';
import { Bell } from '@phosphor-icons/react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };
    setNotifications((prev) => [newNotification, ...prev]);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearNotifications,
      }}
    >
      <ToastProvider>
        {children}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {notifications.map((notification) => (
            <Toast
              key={notification.id}
              variant={notification.type === 'error' ? 'destructive' : 'default'}
            >
              <div className="flex items-start gap-2">
                <Bell className="h-4 w-4" />
                <div className="grid gap-1">
                  <div className="font-semibold">{notification.title}</div>
                  <div className="text-sm">{notification.message}</div>
                </div>
              </div>
            </Toast>
          ))}
        </div>
        <ToastViewport />
      </ToastProvider>
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};