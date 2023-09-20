import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({children}) => {
  const [userType, setUserType] = useState('');
  const [sessionData, setSessionData] = useState({});
  const [isTimeSlotDisabled, setTimeSlotDisabled] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        sessionData,
        setSessionData,
        isTimeSlotDisabled,
        setTimeSlotDisabled,
      }}>
      {children}
    </UserContext.Provider>
  );
};
