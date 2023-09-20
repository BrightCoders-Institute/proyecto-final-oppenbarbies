import { CreateAppointmentSchema } from "./CreateAppointmentSchema";

export type Client = {
  age?: number | string;
  alias?: string;
  appointments?: CreateAppointmentSchema[];
  birthday?: string;
  email?: string | null;
  image?: string | null;
  location?: string;
  name?: string | null;
  phone?: string;
  userType?: string;
  address?: string;
  occupation?: string;
  servicesDescription?: string;
  description?: string;
};

export type Appointment = {};
