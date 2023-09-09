import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({children}) => {
  const [userType, setUserType] = useState('');
  const [sessionData, setSessionData] = useState({});

  return (
    <UserContext.Provider value={{userType, setUserType, sessionData, setSessionData}}>
      {children}
    </UserContext.Provider>
  );
};
