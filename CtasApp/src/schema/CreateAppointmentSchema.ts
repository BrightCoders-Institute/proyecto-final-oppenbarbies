export type CreateAppointmentSchema = {
  date: string;
  time: string;
  address: string[];
  description?: string;
  client: {
    alias: string;
    age: number;
    image: string;
  };
  provider: {
    alias: string;
    occupation: string;
    image: string;
  };
};
