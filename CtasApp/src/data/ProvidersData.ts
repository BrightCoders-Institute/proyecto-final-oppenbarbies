import {Provider} from '../schema/ProviderSchema';
type ProviderWithKey = Provider & {key: string};
export const providersData: ProviderWithKey[] = [
  {
    key: '1',
    name: 'Dr. John Smith',
    alias: 'Dr. John',
    phone: '123-456-7890',
    occupation: 'Dentist',
    address: ['123 Main St', 'City, State'],
    scoreList: [4, 5, 4, 3, 5],
    rating: 4.2,
    image: 'https://docty.co/wp-content/uploads/2021/08/doctores.png',
    userType: 'provider',
    appointments: [],
    birthday: '1980-05-15',
    location: 'City, State',
    servicesDescription: 'Providing dental care services for over 10 years.',
    description:
      "I'm a highly experienced dentist with a passion for improving smiles.",
  },
  {
    key: '2',
    name: 'Lawyer Jane Doe',
    alias: 'Jane Lawyer',
    phone: '987-654-3210',
    occupation: 'Lawyer',
    address: ['456 Elm St', 'City, State'],
    scoreList: [5, 4, 5, 5, 4],
    rating: 4.6,
    image:
      'https://www.abogadosrosario.com/media/noticias/ampl_libros-que-todo-abogado-abogada-debe-leer_13026.jpg',
    userType: 'provider',
    appointments: [],
    birthday: '1990-03-20',
    location: 'City, State',
    servicesDescription: 'Legal services for individuals and businesses.',
    description:
      "I'm a dedicated lawyer committed to serving my clients' legal needs.",
  },
  {
    key: '3',
    name: 'Dr. Maria Garcia',
    alias: 'Dr. Maria',
    phone: '555-123-4567',
    occupation: 'Pediatrician',
    address: ['789 Oak St', 'City, State'],
    scoreList: [5, 5, 5, 4, 4],
    rating: 4.6,
    image:
      'https://previews.123rf.com/images/michaeljung/michaeljung0902/michaeljung090200415/4411472-mujeres-j%C3%B3venes-sonriendo-con-un-pediatra-lindo-beb%C3%A9.jpg',
    userType: 'provider',
    appointments: [],
    birthday: '1975-11-12',
    location: 'City, State',
    servicesDescription:
      'Specializing in pediatric healthcare for children of all ages.',
    description:
      "I'm a caring pediatrician dedicated to the well-being of children.",
  },
  {
    key: '4',
    name: 'Sara Thompson',
    alias: 'Sara T.',
    phone: '333-999-8888',
    occupation: 'Psychologist',
    address: ['222 Pine St', 'City, State'],
    scoreList: [4, 4, 5, 3, 5],
    rating: 4.2,
    image:
      'http://mariangilpsicologia.com/wp-content/uploads/2014/03/fotoperfildef.jpg',
    userType: 'provider',
    appointments: [],
    birthday: '1985-08-25',
    location: 'City, State',
    servicesDescription:
      'Providing counseling and therapy services for mental health.',
    description:
      "I'm a licensed psychologist helping individuals achieve mental well-being.",
  },
  {
    key: '5',
    name: 'Dr. Robert Johnson',
    alias: 'Dr. Robert',
    phone: '777-111-2222',
    occupation: 'Cardiologist',
    address: ['567 Cedar St', 'City, State'],
    scoreList: [5, 5, 5, 5, 5],
    rating: 5.0,
    image:
      'https://thumbs.dreamstime.com/z/doctores-m%C3%A9dico-serio-con-resultados-de-la-prueba-46236287.jpg',
    userType: 'provider',
    appointments: [],
    birthday: '1970-02-03',
    location: 'City, State',
    servicesDescription:
      'Specializing in cardiovascular care and heart health.',
    description:
      "I'm a skilled cardiologist dedicated to improving heart health in patients.",
  },
  // Agrega más proveedores aquí
];
