import {
  Lightning,
  ArrowClockwise,
  Recycle,
  Trash,
  Broom,
  Tree,
} from "@phosphor-icons/react";

export const SERVICE_TYPES = [
  {
    id: "emergency-cleanup",
    name: "Emergency Cleanup",
    description: "24/7 immediate response for urgent situations",
    icon: Lightning,
    price: 299,
  },
  {
    id: "recurring-maintenance",
    name: "Recurring Maintenance",
    description: "Scheduled regular maintenance services",
    icon: ArrowClockwise,
    price: 199,
  },
  {
    id: "waste-management",
    name: "Waste Management",
    description: "Professional waste collection and disposal",
    icon: Trash,
    price: 249,
  },
  {
    id: "recycling-services",
    name: "Recycling Services",
    description: "Sustainable recycling and material recovery",
    icon: Recycle,
    price: 179,
  },
  {
    id: "property-cleanup",
    name: "Property Cleanup",
    description: "Complete property cleaning and maintenance",
    icon: Broom,
    price: 399,
  },
  {
    id: "green-services",
    name: "Green Services",
    description: "Eco-friendly waste management solutions",
    icon: Tree,
    price: 299,
  },
];

export const RECYCLING_OPTIONS = {
  paper: {
    name: "Paper Recycling",
    description: "Recycling of paper, cardboard, and related materials",
    environmentalImpact: "Saves 17 trees per ton recycled",
  },
  plastic: {
    name: "Plastic Recycling",
    description: "Recycling of various plastic types",
    environmentalImpact: "Reduces oil consumption and CO2 emissions",
  },
  glass: {
    name: "Glass Recycling",
    description: "Recycling of glass containers and materials",
    environmentalImpact: "Reduces mining waste and energy consumption",
  },
  electronics: {
    name: "E-Waste Recycling",
    description: "Safe recycling of electronic devices",
    environmentalImpact: "Prevents toxic materials from entering landfills",
  },
  metal: {
    name: "Metal Recycling",
    description: "Recycling of various metal types",
    environmentalImpact: "Reduces mining and energy consumption",
  },
};

export const EMERGENCY_RESPONSE_TIMES = {
  hazardous: "1-2 hours",
  waste: "2-4 hours",
  default: "4-6 hours",
};
