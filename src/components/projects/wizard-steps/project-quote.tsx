'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProjectQuoteProps {
  data: {
    budget: string;
    timeline: string;
    additionalNotes: string;
  };
  onUpdate: (data: Partial<ProjectQuoteProps['data']>) => void;
}

export function ProjectQuote({ data, onUpdate }: ProjectQuoteProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Project Quote</h3>
        <p className="text-sm text-neutral-500">
          Provide budget and timeline information for quote generation
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Estimated Budget Range</Label>
          <Select
            value={data.budget}
            onValueChange={(value) => onUpdate({ budget: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
              <SelectItem value="500k+">$500,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Preferred Timeline</Label>
          <Select
            value={data.timeline}
            onValueChange={(value) => onUpdate({ timeline: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3">1-3 months</SelectItem>
              <SelectItem value="3-6">3-6 months</SelectItem>
              <SelectItem value="6-12">6-12 months</SelectItem>
              <SelectItem value="12+">12+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Additional Notes</Label>
          <Textarea
            placeholder="Any additional information for quote generation..."
            value={data.additionalNotes}
            onChange={(e) => onUpdate({ additionalNotes: e.target.value })}
            className="min-h-[120px]"
          />
        </div>
      </div>
    </div>
  );
}