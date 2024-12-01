import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MapPin, Package, ArrowClockwise } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface ConfirmationPageProps {
  requestId: string;
  serviceType: string;
  location: any;
  scheduledDate?: string;
  scheduledTime?: string;
  isEmergency?: boolean;
  isRecurring?: boolean;
}

export function ConfirmationPage({
  requestId,
  serviceType,
  location,
  scheduledDate,
  scheduledTime,
  isEmergency,
  isRecurring
}: ConfirmationPageProps) {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center"
      >
        <CheckCircle className="h-10 w-10 text-green-600" weight="fill" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-semibold">Request Confirmed!</h1>
        <p className="text-neutral-600">
          Your service request has been successfully submitted.
          {isEmergency ? ' Our team will respond within 2 hours.' : ''}
        </p>

        <div className="mt-8 p-6 bg-neutral-50 rounded-xl">
          <div className="grid gap-6 sm:grid-cols-2 text-left">
            <div>
              <div className="text-sm text-neutral-500 mb-1">Request ID</div>
              <div className="font-medium">{requestId}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-500 mb-1">Service Type</div>
              <div className="font-medium flex items-center gap-2">
                <Package className="h-4 w-4" />
                {serviceType}
              </div>
            </div>
            <div>
              <div className="text-sm text-neutral-500 mb-1">Location</div>
              <div className="font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {location.name}
              </div>
            </div>
            {!isEmergency && scheduledDate && scheduledTime && (
              <div>
                <div className="text-sm text-neutral-500 mb-1">Schedule</div>
                <div className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {scheduledDate} at {scheduledTime}
                </div>
              </div>
            )}
          </div>

          {isRecurring && (
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2 text-blue-600">
                <ArrowClockwise className="h-4 w-4" />
                <span className="text-sm font-medium">Recurring Service</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => router.push('/dashboard')}
          >
            Return to Dashboard
          </Button>
          <Button
            className="rounded-full"
            onClick={() => router.push(`/dashboard/requests/${requestId}`)}
          >
            Track Request
          </Button>
        </div>
      </motion.div>
    </div>
  );
}