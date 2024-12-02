export interface ServiceBundle {
  id: string;
  name: string;
  description: string;
  services: string[];
  price: number;
}

export const SERVICE_BUNDLES: ServiceBundle[] = [
  {
    id: "standard-bundle",
    name: "Standard Package",
    description: "Basic waste management and property maintenance",
    services: ["waste-management", "property-cleanup"],
    price: 549,
  },
  {
    id: "eco-bundle",
    name: "Eco-Friendly Bundle",
    description: "Sustainable waste and recycling services",
    services: ["recycling-services", "green-services"],
    price: 449,
  },
  {
    id: "complete-bundle",
    name: "Complete Care Package",
    description: "Comprehensive property and waste management",
    services: ["waste-management", "property-cleanup", "recycling-services"],
    price: 799,
  },
];
