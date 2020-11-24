import { createContext } from 'react';
import User from '../models/user';

interface AuthContext {
  setUser: (val: User | null) => void;
  getUser: () => User | null | undefined;
}

const authContext = createContext<AuthContext>({
  setUser: (_user: User | null) => {},
  getUser: () => null,
});

export default authContext;
