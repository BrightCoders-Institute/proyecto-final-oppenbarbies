import { CreateAppointmentSchema } from "./CreateAppointmentSchema";

export type Provider = {
  key?: string;
  email?: string | null;
  name?: string | string[] | undefined;
  alias?: string;
  phone?: string;
  occupation?: string;
  address?: string[] | undefined;
  scoreList?: Array<any>;
  totalRating?: number;
  image?: string | null;
  userType?: string;
  appointments?: CreateAppointmentSchema[];
  birthday?: string;
  location?: string;
  servicesDescription?: string;
  description: string;
  unavailableDays?: Array<string>;
  availableTimes?: Array<string>;
};

export type Appointment = {};
