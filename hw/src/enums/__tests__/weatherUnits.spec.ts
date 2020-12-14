import TemperatureUnit, { getAllUnitsTitles, getUnitTitle, TemperatureUnitWithTitle } from './../temperatureUnits';

test('getUnitTitle returns correct unit title', () => {
  const celsiusTitle = getUnitTitle(TemperatureUnit.UNIT_CELSIUS);
  const fahrenheitTitle = getUnitTitle(TemperatureUnit.UNIT_FAHRENHEIT);

  expect(celsiusTitle).toEqual('°C');
  expect(fahrenheitTitle).toEqual('°F');

  expect(celsiusTitle).not.toEqual('');
  expect(fahrenheitTitle).not.toEqual('');
});

test('getAllUnitsTitles returns correct units with corresponding titles', () => {
  const units: number[] = Object.values(TemperatureUnit).filter(v => typeof v === 'number') as number[];
  const titles: string[] = units.map(unit => getUnitTitle(unit));
  const unitsWithTitle: TemperatureUnitWithTitle[] = units.map((_, i) => ({ unit: units[i], title: titles[i] }));

  expect(unitsWithTitle).toEqual<TemperatureUnitWithTitle[]>(getAllUnitsTitles());
});
