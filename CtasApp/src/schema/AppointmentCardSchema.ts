export type Person = {
    name: string;
    img: string;
    age?: number;
    profession?: string;
  };
  
  export type AppointmentCardProps = {
    date: string;
    time: string;
    person: Person;
    address: string;
  };
  