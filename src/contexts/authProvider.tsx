import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

interface IAuthContext {
  isSigned: boolean;
  setIsSigned: Dispatch<SetStateAction<boolean>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({children}) => {
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState('');

  return (
    <AuthContext.Provider value={{isSigned, setIsSigned, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
