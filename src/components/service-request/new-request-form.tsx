'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ServiceCard } from './service-card';
import { LocationSelector } from './location-selector';
import { DateTimePicker } from './datetime-picker';
import { PhotoUpload } from './photo-upload';
import { RecurringSchedule } from './recurring-schedule';
import { ServiceBundle } from './service-bundle';
import { ConfirmationPage } from './confirmation-page';
import { SERVICE_TYPES } from '@/lib/data/service-types';
import { Lightning, ArrowClockwise, CaretRight } from '@phosphor-icons/react';

interface FormData {
  step: number;
  services: string[];
  location: any;
  isEmergency: boolean;
  isRecurring: boolean;
  scheduledDate: string;
  scheduledTime: string;
  recurringFrequency: string;
  recurringDays: string[];
  notes: string;
  photos: File[];
}

const STEPS = [
  { id: 1, name: 'Services' },
  { id: 2, name: 'Location' },
  { id: 3, name: 'Schedule' },
  { id: 4, name: 'Details' }
];

export function NewRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    step: 1,
    services: [],
    location: null,
    isEmergency: false,
    isRecurring: false,
    scheduledDate: '',
    scheduledTime: '',
    recurringFrequency: 'weekly',
    recurringDays: [],
    notes: '',
    photos: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (formData.step < 4) {
      setFormData(prev => ({ ...prev, step: prev.step + 1 }));
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (formData.step > 1) {
      setFormData(prev => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleSubmit = () => {
    // In a real app, we would submit to an API here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <ConfirmationPage
        requestId="SR-12345"
        serviceType={SERVICE_TYPES.find(s => s.id === formData.services[0])?.name || ''}
        location={formData.location}
        scheduledDate={formData.scheduledDate}
        scheduledTime={formData.scheduledTime}
        isEmergency={formData.isEmergency}
        isRecurring={formData.isRecurring}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex justify-between relative">
          <div className="absolute top-4 left-0 right-0 h-1 bg-neutral-100">
            <motion.div
              className="h-full bg-neutral-900"
              initial={{ width: 0 }}
              animate={{ width: `${((formData.step - 1) / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {STEPS.map((step) => (
            <div key={step.id} className="relative z-10">
              <motion.div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
                  step.id <= formData.step
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-white border-neutral-200 text-neutral-400'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: step.id === formData.step ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {step.id}
              </motion.div>
              <div className="absolute -left-1/2 right-1/2 text-sm text-neutral-600 mt-2 whitespace-nowrap">
                {step.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={formData.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {formData.step === 1 && (
            <div className="space-y-8">
              <ServiceBundle
                selectedServices={formData.services}
                onServicesChange={(services) =>
                  setFormData(prev => ({ ...prev, services }))
                }
              />

              <div className="grid gap-6 sm:grid-cols-2">
                {SERVICE_TYPES.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    selected={formData.services.includes(service.id)}
                    onSelect={() => {
                      const services = formData.services.includes(service.id)
                        ? formData.services.filter(s => s !== service.id)
                        : [...formData.services, service.id];
                      setFormData(prev => ({ ...prev, services }));
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {formData.step === 2 && (
            <LocationSelector
              selectedLocation={formData.location}
              onSelect={(location) =>
                setFormData(prev => ({ ...prev, location }))
              }
            />
          )}

          {formData.step === 3 && (
            <div className="space-y-8">
              <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500 rounded-full">
                    <Lightning className="h-6 w-6 text-white" weight="fill" />
                  </div>
                  <div>
                    <div className="font-medium text-amber-900">Emergency Service</div>
                    <div className="text-sm text-amber-700">2-4 hour response time</div>
                  </div>
                </div>
                <Switch
                  checked={formData.isEmergency}
                  onCheckedChange={(checked) =>
                    setFormData(prev => ({ ...prev, isEmergency: checked }))
                  }
                />
              </div>

              {!formData.isEmergency && (
                <>
                  <div className="space-y-4">
                    <Label>Schedule</Label>
                    <DateTimePicker
                      date={formData.scheduledDate ? new Date(formData.scheduledDate) : undefined}
                      time={formData.scheduledTime}
                      onDateChange={(date) =>
                        setFormData(prev => ({
                          ...prev,
                          scheduledDate: date ? date.toISOString().split('T')[0] : ''
                        }))
                      }
                      onTimeChange={(time) =>
                        setFormData(prev => ({ ...prev, scheduledTime: time }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500 rounded-full">
                        <ArrowClockwise className="h-6 w-6 text-white" weight="fill" />
                      </div>
                      <div>
                        <div className="font-medium text-blue-900">Recurring Service</div>
                        <div className="text-sm text-blue-700">Schedule regular pickups</div>
                      </div>
                    </div>
                    <Switch
                      checked={formData.isRecurring}
                      onCheckedChange={(checked) =>
                        setFormData(prev => ({ ...prev, isRecurring: checked }))
                      }
                    />
                  </div>

                  {formData.isRecurring && (
                    <RecurringSchedule
                      frequency={formData.recurringFrequency}
                      selectedDays={formData.recurringDays}
                      onFrequencyChange={(frequency) =>
                        setFormData(prev => ({ ...prev, recurringFrequency: frequency }))
                      }
                      onDaysChange={(days) =>
                        setFormData(prev => ({ ...prev, recurringDays: days }))
                      }
                    />
                  )}
                </>
              )}
            </div>
          )}

          {formData.step === 4 && (
            <div className="space-y-8">
              <div className="space-y-4">
                <Label>Additional Notes</Label>
                <Textarea
                  placeholder="Add any special instructions or details..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, notes: e.target.value }))
                  }
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Photos</Label>
                <PhotoUpload
                  images={formData.photos}
                  onChange={(files) =>
                    setFormData(prev => ({ ...prev, photos: files }))
                  }
                  onRemove={(index) =>
                    setFormData(prev => ({
                      ...prev,
                      photos: prev.photos.filter((_, i) => i !== index)
                    }))
                  }
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-12">
        <Button
          variant="outline"
          onClick={handleBack}
          className="rounded-full px-8"
          disabled={formData.step === 1}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="rounded-full px-8 gap-2"
          disabled={
            (formData.step === 1 && formData.services.length === 0) ||
            (formData.step === 2 && !formData.location) ||
            (formData.step === 3 &&
              !formData.isEmergency &&
              (!formData.scheduledDate || !formData.scheduledTime))
          }
        >
          {formData.step === 4 ? 'Submit Request' : 'Continue'}
          <CaretRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}