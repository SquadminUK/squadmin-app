import CurrentUser from '../Classes/CurrentUser';
import Person from '../Classes/Person';
import {createContext, useState} from 'react';
import Props from '../Interface/Props/PropInterface';

let newPerson: Person = new CurrentUser('', '', '', '', '', '');

export const AuthContext = createContext<Person>(newPerson);

const AuthProvider = ({children}: Props) => {
  const [currentUser, setCurrentUser] = useState<Person>(newPerson);

  return (
    //@ts-ignore
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
