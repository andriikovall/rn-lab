import React from 'react';
import usePromise from '../../hooks/usePromise';
import User from '../../models/user';
import authService from '../../services/authService';
import AuthContext from '../../contexts/auth';

interface AuthProviderProps {
  children?: any;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = usePromise<User | null>(authService.getUser());
  return (
    <AuthContext.Provider value={{
      setUser: setUser,
      getUser: () => user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
