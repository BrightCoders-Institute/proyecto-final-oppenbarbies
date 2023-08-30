import auth from '@react-native-firebase/auth';

export const GETCurrentUserEmail = () => {
  const user = auth().currentUser;
  if (!user) return null;

  return user.email;
};
