import { useState } from "react";
import { MapPin, Buildings, House } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface LocationOption {
  id: string;
  name: string;
  type: "business" | "residential";
  address: string;
  icon: typeof MapPin | typeof Buildings | typeof House;
}

const SAVED_LOCATIONS: LocationOption[] = [
  {
    id: "loc-1",
    name: "Home",
    type: "residential",
    address: "123 Main Street, Anytown, ST 12345",
    icon: House,
  },
  {
    id: "loc-2",
    name: "Office",
    type: "business",
    address: "456 Business Ave, Anytown, ST 12345",
    icon: Buildings,
  },
];

interface LocationSelectorProps {
  location: string | null;
  onLocationChange: (locationId: string) => void;
}

export function LocationSelector({
  location,
  onLocationChange,
}: LocationSelectorProps) {
  const [isAddingNew, setIsAddingNew] = useState(false);

  return (
    <div className="space-y-6">
      {/* Saved Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SAVED_LOCATIONS.map((loc) => {
          const Icon = loc.icon;
          const isSelected = location === loc.id;

          return (
            <motion.div
              key={loc.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-neutral-200 hover:border-primary/50"
              }`}
              onClick={() => onLocationChange(loc.id)}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{loc.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                      {loc.type}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">{loc.address}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Add New Location Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full p-4 rounded-xl border border-dashed border-neutral-300 hover:border-primary/50 text-neutral-600 hover:text-primary transition-colors"
        onClick={() => setIsAddingNew(true)}
      >
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5" />
          <span>Add New Location</span>
        </div>
      </motion.button>

      {/* TODO: Add new location form modal */}
    </div>
  );
}
