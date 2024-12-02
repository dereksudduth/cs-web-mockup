"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ServiceCard } from "./service-card";

import { DateTimePicker } from "./datetime-picker";
import { PhotoUpload } from "./photo-upload";
import { RecurringSchedule } from "./recurring-schedule";
import { ConfirmationPage } from "./confirmation-page";
import { SERVICE_TYPES } from "@/lib/data/service-types";
import { ServiceBundle } from "@/components/service-request/service-bundle";
import { SERVICE_BUNDLES } from "@/lib/data/service-bundles";
import { CaretRight } from "@phosphor-icons/react";
import { LocationSelector } from "./location-selector";

interface FormData {
  step: number;
  services: {
    bundleId: string | null;
    serviceIds: string[];
  };
  location: string | null;
  isEmergency: boolean;
  isRecurring: boolean;
  scheduledDate: string;
  scheduledTime: string;
  recurringSchedule: {
    frequency: "weekly" | "monthly";
    days: string[];
  };
  notes: string;
  photos: File[];
}

const initialFormData: FormData = {
  step: 1,
  services: {
    bundleId: null,
    serviceIds: [],
  },
  location: null,
  isEmergency: false,
  isRecurring: false,
  scheduledDate: "",
  scheduledTime: "",
  recurringSchedule: {
    frequency: "weekly",
    days: [],
  },
  notes: "",
  photos: [],
};

const STEPS = [
  { id: 1, name: "Services" },
  { id: 2, name: "Location" },
  { id: 3, name: "Schedule" },
  { id: 4, name: "Details" },
];

export function NewRequestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceSelection = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        bundleId: null, // Deselect bundle if individual services are selected
        serviceIds: prev.services.serviceIds.includes(serviceId)
          ? prev.services.serviceIds.filter((id) => id !== serviceId)
          : [...prev.services.serviceIds, serviceId],
      },
    }));
  };

  const handleBundleSelection = (bundleId: string | null) => {
    if (!bundleId) {
      setFormData((prev) => ({
        ...prev,
        services: { bundleId: null, serviceIds: [] },
      }));
      return;
    }

    const bundle = SERVICE_BUNDLES.find((b) => b.id === bundleId);
    setFormData((prev) => ({
      ...prev,
      services: {
        bundleId,
        serviceIds: bundle?.services || [],
      },
    }));
  };

  const handleNext = () => {
    if (formData.step < 4) {
      setFormData((prev) => ({ ...prev, step: prev.step + 1 }));
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (formData.step > 1) {
      setFormData((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return (
          formData.services.bundleId !== null ||
          formData.services.serviceIds.length > 0
        );
      case 2:
        return !!formData.location;
      case 3:
        return (
          formData.isEmergency ||
          (!!formData.scheduledDate && !!formData.scheduledTime)
        );
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <ConfirmationPage
        requestId="SR-12345"
        serviceType={
          SERVICE_TYPES.find((s) => s.id === formData.services.serviceIds[0])
            ?.name || "Custom Service"
        }
        location={formData.location || ""}
        scheduledDate={formData.scheduledDate}
        scheduledTime={formData.scheduledTime}
        isEmergency={formData.isEmergency}
        isRecurring={formData.isRecurring}
      />
    );
  }

  return (
    <div className="w-full px-8 py-4">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-4 left-0 right-0 h-1 bg-neutral-100">
            <motion.div
              className="h-full bg-primary"
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
                    ? "bg-primary text-white"
                    : "bg-white border-neutral-300"
                }`}
              >
                {step.id}
              </motion.div>
              <p className="text-sm text-center mt-1">{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={formData.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Step 1: Services */}
          {formData.step === 1 && (
            <div>
              <h2 className="text-lg font-medium mb-4">Select Services</h2>
              {/* Bundle Selection */}
              <ServiceBundle
                selectedBundle={formData.services.bundleId}
                onBundleSelect={handleBundleSelection}
              />
              {/* Individual Services */}
              <div className="mt-8">
                <h3 className="text-md font-medium mb-4">
                  Or Select Individual Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SERVICE_TYPES.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      selected={formData.services.serviceIds.includes(
                        service.id
                      )}
                      onSelect={() => handleServiceSelection(service.id)}
                      disabled={!!formData.services.bundleId}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {formData.step === 2 && (
            <div>
              <h2 className="text-lg font-medium mb-4">Select Location</h2>
              <LocationSelector
                location={formData.location}
                onLocationChange={(location) =>
                  setFormData((prev) => ({ ...prev, location }))
                }
              />
            </div>
          )}

          {/* Step 3: Schedule */}
          {formData.step === 3 && (
            <div>
              <h2 className="text-lg font-medium mb-4">Schedule Service</h2>
              <Switch
                checked={formData.isEmergency}
                onCheckedChange={(isEmergency) =>
                  setFormData((prev) => ({ ...prev, isEmergency }))
                }
                label="Emergency Service?"
              />
              {!formData.isEmergency && (
                <DateTimePicker
                  date={formData.scheduledDate}
                  time={formData.scheduledTime}
                  onDateChange={(scheduledDate) =>
                    setFormData((prev) => ({ ...prev, scheduledDate }))
                  }
                  onTimeChange={(scheduledTime) =>
                    setFormData((prev) => ({ ...prev, scheduledTime }))
                  }
                />
              )}
              {formData.isRecurring && (
                <RecurringSchedule
                  frequency={formData.recurringSchedule.frequency}
                  days={formData.recurringSchedule.days}
                  onFrequencyChange={(frequency) =>
                    setFormData((prev) => ({
                      ...prev,
                      recurringSchedule: {
                        ...prev.recurringSchedule,
                        frequency,
                      },
                    }))
                  }
                  onDaysChange={(days) =>
                    setFormData((prev) => ({
                      ...prev,
                      recurringSchedule: { ...prev.recurringSchedule, days },
                    }))
                  }
                />
              )}
            </div>
          )}

          {/* Step 4: Details */}
          {formData.step === 4 && (
            <div>
              <h2 className="text-lg font-medium mb-4">Additional Details</h2>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, notes: e.target.value }))
                }
                placeholder="Add any special instructions here..."
              />
              <PhotoUpload
                photos={formData.photos}
                onPhotosChange={(photos) =>
                  setFormData((prev) => ({ ...prev, photos }))
                }
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          className="rounded-full"
          disabled={formData.step === 1}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="rounded-full"
          disabled={!isStepValid(formData.step)}
        >
          {formData.step === 4 ? "Submit Request" : "Continue"}
          <CaretRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
