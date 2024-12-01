'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { ProjectBasicInfo } from './wizard-steps/project-basic-info';
import { ProjectLocations } from './wizard-steps/project-locations';
import { ProjectRequirements } from './wizard-steps/project-requirements';
import { ProjectQuote } from './wizard-steps/project-quote';
import { ProjectReview } from './wizard-steps/project-review';

const STEPS = [
  { id: 1, name: 'Basic Info' },
  { id: 2, name: 'Locations' },
  { id: 3, name: 'Requirements' },
  { id: 4, name: 'Quote' },
  { id: 5, name: 'Review' }
];

export function NewProjectWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: {
      name: '',
      client: '',
      description: '',
      startDate: undefined as Date | undefined,
      endDate: undefined as Date | undefined,
    },
    locations: [] as any[],
    requirements: {
      services: [] as string[],
      specialInstructions: '',
      photos: [] as File[],
    },
    quote: {
      budget: '',
      timeline: '',
      additionalNotes: '',
    },
  });

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, we would submit to an API here
    router.push('/dashboard/projects');
  };

  const progress = (currentStep / STEPS.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Create New Project</h2>
          <p className="text-neutral-500">Complete all steps to submit your project for review</p>
        </div>

        <div className="relative pt-8">
          <Progress value={progress} className="h-2" />
          <div className="absolute top-0 left-0 right-0 flex justify-between">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                style={{ left: `${(index / (STEPS.length - 1)) * 100}%` }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                    index + 1 <= currentStep
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-neutral-400 border-neutral-200'
                  }`}
                >
                  {step.id}
                </div>
                <span className="mt-2 text-sm text-neutral-600">{step.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <ProjectBasicInfo
                  data={formData.basicInfo}
                  onUpdate={(data) => setFormData(prev => ({ ...prev, basicInfo: { ...prev.basicInfo, ...data } }))}
                />
              )}
              {currentStep === 2 && (
                <ProjectLocations
                  data={formData.locations}
                  onUpdate={(locations) => setFormData(prev => ({ ...prev, locations }))}
                />
              )}
              {currentStep === 3 && (
                <ProjectRequirements
                  data={formData.requirements}
                  onUpdate={(data) => setFormData(prev => ({ ...prev, requirements: { ...prev.requirements, ...data } }))}
                />
              )}
              {currentStep === 4 && (
                <ProjectQuote
                  data={formData.quote}
                  onUpdate={(data) => setFormData(prev => ({ ...prev, quote: { ...prev.quote, ...data } }))}
                />
              )}
              {currentStep === 5 && (
                <ProjectReview data={formData} />
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="rounded-full px-8"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="rounded-full px-8"
        >
          {currentStep === STEPS.length ? 'Submit Project' : 'Continue'}
        </Button>
      </div>
    </div>
  );
}