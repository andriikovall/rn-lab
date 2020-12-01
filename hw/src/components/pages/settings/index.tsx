import React from 'react';
import { ScrollView } from 'react-native';
import RangeInput from './RangeInput';
import UserDataForm from './UserDataFrom';
import pluralize from 'pluralize';
import TemperatureUnitsInput from './TemperatureUnitsInput';
import TemperatureUnit from '../../../enums/temperatureUnits';
import SettingsState from '../../../models/store/states/settingsState';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../models/store/appState';
import { updateSettings } from '../../../store/actionCreators/settings';


export default function Settings() {

  const settings: SettingsState = useSelector<AppState, SettingsState>(state => state.settings);
  const dispatch = useDispatch();

  const pluralizeDays = (val: number) => {
    return pluralize('days', val);
  };

  const onChangeTemperatureUnits = (unit: TemperatureUnit) => {
    dispatch(updateSettings({ temperatureUnits: unit }));
  };

  const onChangeShowWeatherTime = (days: number) => {
    dispatch(updateSettings({ daysToShowWeatherFor: days }));
  };

  const onChangeUpdateWeatherTime = (mins: number) => {
    dispatch(updateSettings({ minsToUpdateWeatherEvery: mins }));
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
