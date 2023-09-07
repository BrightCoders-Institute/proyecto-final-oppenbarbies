import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView, View, KeyboardAvoidingView} from 'react-native';
import SearchInput from '../components/SearchInput';
import ProviderInfoList from '../components/ProviderInfoList';
import Navbar from '../components/Navbar';
import BodyStyles from '../styles/BodyStyles';
import Header from '../components/Header';
import {Provider} from '../schema/ProviderSchema';
import firestore from '@react-native-firebase/firestore';
import {useUserContext} from '../../UserContext';
type ProviderWithKey = Provider & {key: string};

const SearchScreen: React.FC = () => {
  const [search, setSerach] = useState('');
  const [providers, setProviders] = useState<ProviderWithKey[]>([]);
  const {userType} = useUserContext();
  const [filteredProviders, setFilteredProviders] = useState<ProviderWithKey[]>(
    [],
  );
  const providersData: ProviderWithKey[] = [
    {
      key: '1',
      name: 'Dr. John Smith',
      alias: 'Dr. John',
      phone: '123-456-7890',
      occupation: 'Dentist',
      address: ['123 Main St', 'City, State'],
      scoreList: [4, 5, 4, 3, 5],
      rating: 4.2,
      image: 'https://example.com/images/drjohn.jpg',
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
      image: 'https://example.com/images/janelawyer.jpg',
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
      image: 'https://example.com/images/drmaria.jpg',
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
      image: 'https://example.com/images/sara.jpg',
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
      image: 'https://example.com/images/drrobert.jpg',
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
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Providers')
      .onSnapshot(querySnapshot => {
        const providersList: ProviderWithKey[] = [];
        querySnapshot.forEach(documentSnapshot => {
          const provider = documentSnapshot.data() as Provider;
          providersList.push({
            ...provider,
            key: documentSnapshot.id,
          });
        });
        setProviders(providersList);
      });
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={BodyStyles.container}>
      <Header title="What do you need?" />
      <View style={BodyStyles.bodyContainer}>
        <SearchInput
          search={search}
          setSearch={setSerach}
          providers={providersData}
          setFilteredProviders={setFilteredProviders}
        />
        <ProviderInfoList providers={providersData} />
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
