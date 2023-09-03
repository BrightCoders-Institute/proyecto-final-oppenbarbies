export type Client = {
  age?: number;
  alias?: string;
  appointments?: Array<Appointment>;
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
