import { IconProps } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  price: number;
  image?: string; // Optional image URL
}

interface ServiceCardProps {
  service: Service;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
  isBundle?: boolean;
}

export function ServiceCard({
  service,
  selected,
  onSelect,
  disabled,
  isBundle,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      className={`relative overflow-hidden rounded-xl border transition-all ${
        selected
          ? "border-primary bg-primary/5 shadow-lg"
          : "border-neutral-200 hover:border-primary/50"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={() => !disabled && onSelect()}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          <div
            className={`rounded-xl ${
              isBundle ? "bg-primary/20 p-3" : "bg-primary/10 p-2"
            }`}
          >
            <Icon
              className={`${isBundle ? "w-8 h-8" : "w-6 h-6"} text-primary`}
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-neutral-900">
              {service.name}
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              {service.description}
            </p>
            <div className="mt-3">
              <span className="text-lg font-bold text-primary">
                ${service.price}
              </span>
              {!isBundle && (
                <span className="text-sm text-neutral-500 ml-1">
                  per service
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Selected Indicator */}
        {selected && (
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
