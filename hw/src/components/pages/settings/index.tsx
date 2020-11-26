import React from 'react';
import { ScrollView } from 'react-native';
import RangeInput from './RangeInput';
import UserDataForm from './UserDataFrom';
import pluralize from 'pluralize';
import TemperatureUnitsInput from './TemperatureUnitsInput';
import TemperatureUnit from '../../../enums/temperatureUnits';
import useSettings from '../../../hooks/useSettings';


export default function Settings() {

  const { settings, setSettings } = useSettings();

  const pluralizeDays = (val: number) => {
    return pluralize('days', val);
  };

  const onChangeTemperatureUnits = (unit: TemperatureUnit) => {
    setSettings({ ...settings, temperatureUnits: unit });
  };

  const onChangeShowWeatherTime = (days: number) => {
    setSettings({ ...settings, daysToShowWeatherFor: days });
  };

  const onChangeUpdateWeatherTime = (mins: number) => {
    setSettings({ ...settings, minsToUpdateWeatherEvery: mins });
  };

  return (
    <ScrollView>
      <UserDataForm />
      <RangeInput
        min={1}
        max={6}
        units={pluralizeDays}
        label="Show weather for"
        onChange={onChangeShowWeatherTime}
        step={1} initialValue={settings.daysToShowWeatherFor} />

      <RangeInput
        min={5}
        max={60}
        units="min"
        label="Update weather every"
        onChange={onChangeUpdateWeatherTime}
        step={5} initialValue={settings.minsToUpdateWeatherEvery} />

      <TemperatureUnitsInput initialValue={settings.temperatureUnits}
        onChange={onChangeTemperatureUnits} />

    </ScrollView>
  );

}
