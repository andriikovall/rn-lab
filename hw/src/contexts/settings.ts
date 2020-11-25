import { createContext } from 'react';
import TemperatureUnit from '../enums/temperatureUnits';
import Settings from '../models/settings';

interface SettingsContext {
  settings: Settings;
  setSettings: (s: Settings) => void;
}

const authContext = createContext<SettingsContext>({
  settings: {
    daysToShowWeatherFor: 5,
    minsToUpdateWeatherEvery: 5,
    temperatureUnits: TemperatureUnit.UNIT_CELSIUS,
  },
  setSettings: () => {},
});

export default authContext;
