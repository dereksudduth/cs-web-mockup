export interface LocationSelectorProps {
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface DateTimePickerProps {
  date: Date | null;
  time: string;
  onDateChange: (date: Date | null | undefined) => void;
  onTimeChange: (time: string) => void;
}

export interface RecurringScheduleProps {
  frequency: "weekly" | "monthly";
  days: string[];
  onFrequencyChange: (frequency: "weekly" | "monthly") => void;
  onDaysChange: (days: string[]) => void;
}

export interface PhotoUploadProps {
  photos: File[];
  onUpload: (files: File[]) => void;
}

export interface SwitchLabelProps extends React.ComponentProps<"button"> {
  label?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ServiceBundle {
  id: string;
  name: string;
  description: string;
  services: string[];
  price: number;
}
