export const mapStyles = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#e9e9e9' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
];

export const defaultMapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true,
  streetViewControl: false,
  gestureHandling: 'greedy',
};

export const defaultCenter = { lat: 39.8283, lng: -98.5795 };
export const defaultZoom = 4;