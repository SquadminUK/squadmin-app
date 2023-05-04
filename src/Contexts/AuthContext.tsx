import CurrentUser from '../Classes/CurrentUser';
import Person from '../Classes/Person';
import {createContext, useState} from 'react';

let newPerson = new CurrentUser('12', 'Jamil', 'Nawaz', '', '', '');

export const AuthContext = createContext<Person>(newPerson);

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState<Person>(newPerson);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
