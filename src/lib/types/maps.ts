export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  id: number;
  name: string;
  position: Coordinates;
  status: string;
}