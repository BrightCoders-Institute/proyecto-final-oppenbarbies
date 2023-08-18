import {AppointmentCardProps} from '../schema/AppointmentCardSchema';

export interface AppointmentDetailsModalProps {
    isVisible: boolean;
    appointment: AppointmentCardProps | null;
    onClose: () => void;
  }