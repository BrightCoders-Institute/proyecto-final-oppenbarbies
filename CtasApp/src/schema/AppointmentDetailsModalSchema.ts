import {AppointmentCardProps} from '../schema/AppointmentCardSchema';
import {CreateAppointmentSchema} from '../schema/CreateAppointmentSchema';
export interface AppointmentDetailsModalProps {
  isVisible: boolean;
  appointment: CreateAppointmentSchema | null;
  onClose: () => void;
}
