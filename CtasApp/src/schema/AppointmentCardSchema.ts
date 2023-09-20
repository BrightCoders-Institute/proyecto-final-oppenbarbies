import { CreateAppointmentSchema } from "./CreateAppointmentSchema";

export type Person = {
  name: string;
  img: string;
  age?: number;
  profession?: string;
};

export type AppointmentCardProps = {
  appointment: CreateAppointmentSchema;
  onDelete: (appointmentToDelete: CreateAppointmentSchema) => Promise<void>;
};
