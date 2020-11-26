import { useContext } from 'react';
import authContext from '../contexts/auth';

const useAuth = () => useContext(authContext);

export default useAuth;
