export type Provider = {
  key?: string;
  email?: string | null;
  name?: string | string[] | undefined;
  alias?: string;
  phone?: string;
  occupation?: string;
  address?: string[] | undefined;
  scoreList?: Array<any>;
  rating?: number;
  image?: string | null;
  userType?: string;
  appointments?: Array<any>;
  birthday?: string;
  location?: string;
  servicesDescription?: string;
  description: string;
  unavailableDays?:Array<string>;
};

export type Appointment = {};
