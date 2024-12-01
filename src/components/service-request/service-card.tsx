import { motion } from 'framer-motion';
import { Lightning, ArrowClockwise, Recycle } from '@phosphor-icons/react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    allowsEmergency?: boolean;
    allowsRecurring?: boolean;
    recyclingOptions?: string[];
  };
  selected: boolean;
  onSelect: () => void;
}

export function ServiceCard({ service, selected, onSelect }: ServiceCardProps) {
  const getServiceImage = (id: string) => {
    const images = {
      waste: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80',
      hazardous: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80',
      bulk: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80',
      recycling: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80',
      quote: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
    };
    return images[id as keyof typeof images] || images.waste;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all ${
        selected ? 'ring-2 ring-black ring-offset-4' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />
      
      <img
        src={getServiceImage(service.id)}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 p-6 min-h-[280px] flex flex-col justify-end text-white">
        <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
        <p className="text-white/90 mb-4">{service.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {service.allowsEmergency && (
            <span className="inline-flex items-center gap-1 text-sm bg-red-500/90 px-3 py-1 rounded-full">
              <Lightning className="h-4 w-4" weight="fill" />
              Emergency Available
            </span>
          )}
          {service.allowsRecurring && (
            <span className="inline-flex items-center gap-1 text-sm bg-blue-500/90 px-3 py-1 rounded-full">
              <ArrowClockwise className="h-4 w-4" weight="fill" />
              Recurring
            </span>
          )}
          {service.recyclingOptions && (
            <span className="inline-flex items-center gap-1 text-sm bg-green-500/90 px-3 py-1 rounded-full">
              <Recycle className="h-4 w-4" weight="fill" />
              Recycling Available
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}