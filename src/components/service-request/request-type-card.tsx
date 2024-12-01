import { Card, CardContent } from '@/components/ui/card';
import { SERVICE_TYPES } from '@/lib/data/service-types';
import { Warning, ArrowClockwise, Recycle } from '@phosphor-icons/react';

interface RequestTypeCardProps {
  serviceType: string;
  onSelect: () => void;
  selected: boolean;
}

export function RequestTypeCard({ serviceType, onSelect, selected }: RequestTypeCardProps) {
  const service = SERVICE_TYPES.find(s => s.id === serviceType);
  if (!service) return null;

  return (
    <Card
      className={`cursor-pointer transition-all ${
        selected 
          ? 'ring-2 ring-black ring-offset-2' 
          : 'hover:border-neutral-300'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-6">
        <h3 className="font-medium mb-2">{service.name}</h3>
        <p className="text-sm text-neutral-500 mb-4">{service.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {service.allowsEmergency && (
            <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
              <Warning className="h-3 w-3" />
              Emergency Available
            </span>
          )}
          {service.allowsRecurring && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              <ArrowClockwise className="h-3 w-3" />
              Recurring
            </span>
          )}
          {service.recyclingOptions && (
            <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              <Recycle className="h-3 w-3" />
              Recycling Available
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}