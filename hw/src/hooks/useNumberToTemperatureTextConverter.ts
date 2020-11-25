import { getUnitTitle } from '../enums/temperatureUnits';
import { getConverter } from '../helpers/temperatureConverters';
import useSettings from './useSettings';

const useNumberToTemperatureTextConverter = (val: number): string => {
  const { settings } = useSettings();
  const converter = getConverter(settings.temperatureUnits);
  return `${converter(val).toFixed(0)}${getUnitTitle(settings.temperatureUnits)}`;
};

export default useNumberToTemperatureTextConverter;
