'use client';

import { NewProjectWizard } from '@/components/projects/new-project-wizard';

export default function NewProjectPage() {
  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <NewProjectWizard />
    </div>
  );
}