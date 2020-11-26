import { useContext } from 'react';
import loadingContext from '../contexts/loading';

const useLoading = () => useContext(loadingContext);

export default useLoading;
