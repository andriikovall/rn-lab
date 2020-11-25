import TemperatureUnit from '../enums/temperatureUnits';

export const kelvinToCelsius =
  (val: number): number => val - 273.15;

export const kelvinToFahrenheit =
  (val: number): number => kelvinToCelsius(val) * 9 / 5 + 32;

export const getConverter = (unit: TemperatureUnit): (val: number) => number => {
  switch (unit) {
    case (TemperatureUnit.UNIT_FAHRENHEIT): return kelvinToFahrenheit;
    case (TemperatureUnit.UNIT_CELSIUS):
    default: return kelvinToCelsius;
  }
};
