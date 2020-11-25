import { useContext } from 'react';
import settingsContext from '../contexts/settings';

const useSettings = () => useContext(settingsContext);

export default useSettings;
