import { useSelector } from 'react-redux';
import { getUnitTitle } from '../enums/temperatureUnits';
import { getConverter } from '../helpers/temperatureConverters';
import AppState from '../models/store/appState';
import SettingsState from '../models/store/states/settingsState';

const useNumberToTemperatureTextConverter = (val: number): string => {
  const settings = useSelector<AppState, SettingsState>(state => state.settings);
  const converter = getConverter(settings.temperatureUnits);
  const number = converter(val).toFixed(0);
  const unitSuffix = getUnitTitle(settings.temperatureUnits);
  // had some cases when number is -0. So here it is a simple fix for it
  return `${number === '-0' ? '0' : number}${unitSuffix}`;
};

export default useNumberToTemperatureTextConverter;
