import { ServiceBundle as ServiceBundleType } from "@/lib/data/service-bundles";
import { SERVICE_BUNDLES } from "@/lib/data/service-bundles";
import { ServiceCard } from "./service-card";
import { Package } from "@phosphor-icons/react";

interface ServiceBundleProps {
  selectedBundle: string | null;
  onBundleSelect: (bundleId: string | null) => void;
}

export function ServiceBundle({
  selectedBundle,
  onBundleSelect,
}: ServiceBundleProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Package className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-neutral-900">
          Popular Service Bundles
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICE_BUNDLES.map((bundle) => (
          <ServiceCard
            key={bundle.id}
            service={{
              id: bundle.id,
              name: bundle.name,
              description: bundle.description,
              icon: Package,
              price: bundle.price,
            }}
            selected={selectedBundle === bundle.id}
            onSelect={() => onBundleSelect(bundle.id)}
            disabled={false}
            isBundle={true}
          />
        ))}
      </div>
    </div>
  );
}
