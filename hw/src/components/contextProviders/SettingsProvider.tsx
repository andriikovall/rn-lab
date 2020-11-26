/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import SettingsContext from '../../contexts/settings';
import TemperatureUnit from '../../enums/temperatureUnits';
import useErrorHandler from '../../hooks/useErrorHandler';
import Settings from '../../models/settings';

interface SettingsProviderProps {
  children: any;
}

const settingsStorageKey = 'settings';
const defaultSettings: Settings = {
  daysToShowWeatherFor: 4,
  minsToUpdateWeatherEvery: 15,
  temperatureUnits: TemperatureUnit.UNIT_CELSIUS,
  cityName: 'Kyiv',
};

export default function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const errorHandler = useErrorHandler();

  useEffect(() => {
    AsyncStorage.getItem(settingsStorageKey)
      .then((rawSettings: string | null) => rawSettings ? JSON.parse(rawSettings) : defaultSettings)
      .then(setSettings)
      .catch(errorHandler);
  }, []);

  const cacheSettingsAndUpdate = (s: Settings) => {
    // ignore promise, it's not crucial
    AsyncStorage.setItem(settingsStorageKey, JSON.stringify(s))
      .catch(errorHandler);

    setSettings(s);
  };

  return (
    <SettingsContext.Provider value={{
      setSettings: cacheSettingsAndUpdate,
      settings,
    }}>
      {children}
    </SettingsContext.Provider>
  );
}
