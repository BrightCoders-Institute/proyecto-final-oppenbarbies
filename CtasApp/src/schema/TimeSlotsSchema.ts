import { Dispatch } from "react";

export interface TimeSlotsModalProps {
  isVisible: boolean;
  onClose: () => void;
  slots: string[];
  onSelect: (timeSlot: string) => void;
}

export interface TimeSlotButtonProps {
  slots: string[];
  selectedHour: string;
  setSelectedHour: Dispatch<React.SetStateAction<string>>
}
