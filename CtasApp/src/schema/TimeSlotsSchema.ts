import {Dispatch} from 'react';

export interface TimeSlotsModalProps {
  isVisible: boolean;
  onClose: () => void;
  email: string;
  slots: string[];
  onSelect: (timeSlot: string) => void;
  isTimeSlotDisabled: boolean;
  selectedHour: string;
}

export interface TimeSlotButtonProps {
  slots: string[];
  selectedHour: string;
  setSelectedHour: Dispatch<React.SetStateAction<string>>;
  email: string;
  isTimeSlotDisabled: boolean;
}
