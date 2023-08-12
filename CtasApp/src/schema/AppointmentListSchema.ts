export type PersonProvider = {
    img: string;
    name: string;
    age: number;
  };
  
  export type AppointmentProvider = {
    id: string;
    date: string;
    time: string;
    address: string;
    person: PersonProvider;
  };
  