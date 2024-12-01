export const SERVICE_TYPES = [
  {
    id: 'waste',
    name: 'Waste Collection',
    description: 'Regular waste pickup and disposal',
    requiresScheduling: true,
    allowsEmergency: true,
    allowsRecurring: true,
    recyclingOptions: ['paper', 'plastic', 'glass'],
    fields: ['volume', 'containerType']
  },
  {
    id: 'hazardous',
    name: 'Hazardous Waste',
    description: 'Safe disposal of hazardous materials',
    requiresScheduling: true,
    allowsEmergency: true,
    allowsRecurring: false,
    requiresPhotos: true,
    fields: ['materialType', 'quantity', 'safetyNotes']
  },
  {
    id: 'bulk',
    name: 'Bulk Pickup',
    description: 'Large item removal and disposal',
    requiresScheduling: true,
    allowsEmergency: false,
    allowsRecurring: false,
    requiresPhotos: true,
    fields: ['itemType', 'dimensions', 'quantity']
  },
  {
    id: 'recycling',
    name: 'Recycling',
    description: 'Sorting and recycling of materials',
    requiresScheduling: true,
    allowsEmergency: false,
    allowsRecurring: true,
    recyclingOptions: ['electronics', 'metal', 'paper', 'plastic', 'glass'],
    fields: ['materialTypes', 'volume']
  },
  {
    id: 'quote',
    name: 'Custom Quote',
    description: 'Get a quote for special projects',
    requiresScheduling: false,
    allowsEmergency: false,
    allowsRecurring: false,
    requiresPhotos: true,
    fields: ['projectType', 'timeline', 'budget', 'description']
  }
];

export const RECYCLING_OPTIONS = {
  paper: {
    name: 'Paper Recycling',
    description: 'Recycling of paper, cardboard, and related materials',
    environmentalImpact: 'Saves 17 trees per ton recycled'
  },
  plastic: {
    name: 'Plastic Recycling',
    description: 'Recycling of various plastic types',
    environmentalImpact: 'Reduces oil consumption and CO2 emissions'
  },
  glass: {
    name: 'Glass Recycling',
    description: 'Recycling of glass containers and materials',
    environmentalImpact: 'Reduces mining waste and energy consumption'
  },
  electronics: {
    name: 'E-Waste Recycling',
    description: 'Safe recycling of electronic devices',
    environmentalImpact: 'Prevents toxic materials from entering landfills'
  },
  metal: {
    name: 'Metal Recycling',
    description: 'Recycling of various metal types',
    environmentalImpact: 'Reduces mining and energy consumption'
  }
};

export const EMERGENCY_RESPONSE_TIMES = {
  hazardous: '1-2 hours',
  waste: '2-4 hours',
  default: '4-6 hours'
};