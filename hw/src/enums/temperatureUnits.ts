enum TemperatureUnit {
  UNIT_CELSIUS,
  UNIT_FAHRENHEIT,
}

const unitsTitleMap = new Map<TemperatureUnit, string>([
  [TemperatureUnit.UNIT_CELSIUS, '°C'],
  [TemperatureUnit.UNIT_FAHRENHEIT, '°F'],
]);

export interface TemperatureUnitWithTitle {
  unit: TemperatureUnit;
  title: string;
}

export const getUnitTitle = (unit: TemperatureUnit): string => {
  return unitsTitleMap.get(unit) ?? '';
};

export const getAllUnitsTitles = (): TemperatureUnitWithTitle[] => {
  return [ ...unitsTitleMap.entries() ].map(([unit, title]) => ({ unit, title }));
};

export default TemperatureUnit;
