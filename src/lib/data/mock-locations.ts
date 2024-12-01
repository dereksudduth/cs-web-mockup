export const NATIONWIDE_LOCATIONS = [
  // Northeast
  {
    id: 1,
    name: 'Manhattan Office Complex',
    address: '350 5th Avenue, New York, NY 10118',
    type: 'Commercial',
    position: { lat: 40.7484, lng: -73.9857 }
  },
  {
    id: 2,
    name: 'Boston Tech Center',
    address: '100 Federal Street, Boston, MA 02110',
    type: 'Commercial',
    position: { lat: 42.3554, lng: -71.0547 }
  },
  // West Coast
  {
    id: 3,
    name: 'SF Innovation Hub',
    address: '101 California St, San Francisco, CA 94111',
    type: 'Commercial',
    position: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: 4,
    name: 'Seattle Commerce Center',
    address: '400 Pine Street, Seattle, WA 98101',
    type: 'Commercial',
    position: { lat: 47.6062, lng: -122.3321 }
  },
  // South
  {
    id: 5,
    name: 'Miami Beach Resort',
    address: '1100 Collins Ave, Miami Beach, FL 33139',
    type: 'Hospitality',
    position: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: 6,
    name: 'Atlanta Business Park',
    address: '191 Peachtree St NE, Atlanta, GA 30303',
    type: 'Commercial',
    position: { lat: 33.7490, lng: -84.3880 }
  },
  {
    id: 7,
    name: 'Houston Energy Center',
    address: '1000 Louisiana St, Houston, TX 77002',
    type: 'Industrial',
    position: { lat: 29.7604, lng: -95.3698 }
  },
  // Midwest
  {
    id: 8,
    name: 'Chicago Loop Offices',
    address: '233 S Wacker Dr, Chicago, IL 60606',
    type: 'Commercial',
    position: { lat: 41.8781, lng: -87.6298 }
  },
  {
    id: 9,
    name: 'Detroit Auto Complex',
    address: '400 Renaissance Center, Detroit, MI 48243',
    type: 'Industrial',
    position: { lat: 42.3314, lng: -83.0458 }
  },
  // Southwest
  {
    id: 10,
    name: 'Phoenix Tech Park',
    address: '2 N Central Ave, Phoenix, AZ 85004',
    type: 'Commercial',
    position: { lat: 33.4484, lng: -112.0740 }
  },
  {
    id: 11,
    name: 'Denver Mountain Center',
    address: '1801 California St, Denver, CO 80202',
    type: 'Commercial',
    position: { lat: 39.7392, lng: -104.9903 }
  },
  // Additional West Coast
  {
    id: 12,
    name: 'LA Downtown Plaza',
    address: '633 W 5th St, Los Angeles, CA 90071',
    type: 'Commercial',
    position: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: 13,
    name: 'Portland Green Building',
    address: '111 SW 5th Ave, Portland, OR 97204',
    type: 'Commercial',
    position: { lat: 45.5155, lng: -122.6789 }
  },
  // Additional Northeast
  {
    id: 14,
    name: 'Philadelphia Commerce Square',
    address: '2005 Market St, Philadelphia, PA 19103',
    type: 'Commercial',
    position: { lat: 39.9526, lng: -75.1652 }
  },
  {
    id: 15,
    name: 'DC Government Center',
    address: '1301 Pennsylvania Ave NW, Washington, DC 20004',
    type: 'Government',
    position: { lat: 38.8977, lng: -77.0365 }
  },
  // Additional South
  {
    id: 16,
    name: 'Nashville Music Row',
    address: '1 Music Square E, Nashville, TN 37203',
    type: 'Entertainment',
    position: { lat: 36.1627, lng: -86.7816 }
  },
  {
    id: 17,
    name: 'Orlando Theme Park',
    address: '6000 Universal Blvd, Orlando, FL 32819',
    type: 'Entertainment',
    position: { lat: 28.5383, lng: -81.3792 }
  },
  // Additional Midwest
  {
    id: 18,
    name: 'Minneapolis Tower',
    address: '80 S 8th St, Minneapolis, MN 55402',
    type: 'Commercial',
    position: { lat: 44.9778, lng: -93.2650 }
  },
  {
    id: 19,
    name: 'St. Louis Arch Center',
    address: '100 N Broadway, St. Louis, MO 63102',
    type: 'Commercial',
    position: { lat: 38.6270, lng: -90.1994 }
  },
  // Additional Southwest
  {
    id: 20,
    name: 'Las Vegas Strip Mall',
    address: '3570 S Las Vegas Blvd, Las Vegas, NV 89109',
    type: 'Retail',
    position: { lat: 36.1699, lng: -115.1398 }
  },
  {
    id: 21,
    name: 'Austin Tech Hub',
    address: '100 Congress Ave, Austin, TX 78701',
    type: 'Technology',
    position: { lat: 30.2672, lng: -97.7431 }
  },
  // Pacific
  {
    id: 22,
    name: 'Honolulu Resort',
    address: '2255 Kalakaua Ave, Honolulu, HI 96815',
    type: 'Hospitality',
    position: { lat: 21.2769, lng: -157.8268 }
  },
  // Additional Locations
  {
    id: 23,
    name: 'Salt Lake City Center',
    address: '15 W Temple, Salt Lake City, UT 84101',
    type: 'Commercial',
    position: { lat: 40.7608, lng: -111.8910 }
  },
  {
    id: 24,
    name: 'Charlotte Financial Center',
    address: '100 N Tryon St, Charlotte, NC 28202',
    type: 'Financial',
    position: { lat: 35.2271, lng: -80.8431 }
  },
  {
    id: 25,
    name: 'San Diego Tech Campus',
    address: '750 B St, San Diego, CA 92101',
    type: 'Technology',
    position: { lat: 32.7157, lng: -117.1611 }
  }
];

export const SERVICE_TYPES = [
  { id: 'waste', name: 'Waste Collection', description: 'Regular waste pickup and disposal' },
  { id: 'recycling', name: 'Recycling', description: 'Sorting and recycling of materials' },
  { id: 'hazardous', name: 'Hazardous Waste', description: 'Safe disposal of hazardous materials' },
  { id: 'bulk', name: 'Bulk Pickup', description: 'Large item removal and disposal' },
  { id: 'green', name: 'Green Waste', description: 'Yard waste and organic material collection' },
  { id: 'construction', name: 'Construction Waste', description: 'Disposal of construction materials' },
  { id: 'electronic', name: 'E-Waste', description: 'Safe disposal of electronic equipment' },
  { id: 'medical', name: 'Medical Waste', description: 'Specialized medical waste disposal' }
];