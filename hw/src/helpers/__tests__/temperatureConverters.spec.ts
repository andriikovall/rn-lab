import { kelvinToCelsius, kelvinToFahrenheit } from '../temperatureConverters';

test('kelvinToCelsius converter works as expected', () => {
  for (let i = 0; i < 500; i++) {
    expect(kelvinToCelsius(i)).toStrictEqual(i - 273.15);
  }
});

test('kelvinToFahrenheit converter works as expected', () => {
  // taken from https://www.rapidtables.com/convert/temperature/kelvin-to-fahrenheit.html
  const kelvinToFahrenheitTable = [
    { K: 0, F: -459.67 },
    { K: 10, F: -441.67 },
    { K: 20, F: -423.67 },
    { K: 30, F: -405.67 },
    { K: 40, F: -387.67 },
    { K: 50, F: -369.67 },
    { K: 60, F: -351.67 },
    { K: 70, F: -333.67 },
    { K: 80, F: -315.67 },
    { K: 90, F: -297.67 },
    { K: 100, F: -279.67 },
    { K: 110, F: -261.67 },
    { K: 120, F: -243.67 },
    { K: 130, F: -225.67 },
    { K: 140, F: -207.67 },
    { K: 150, F: -189.67 },
    { K: 160, F: -171.67 },
    { K: 170, F: -153.67 },
    { K: 180, F: -135.67 },
    { K: 190, F: -117.67 },
    { K: 200, F: -99.67 },
    { K: 210, F: -81.67 },
    { K: 220, F: -63.67 },
    { K: 230, F: -45.67 },
    { K: 240, F: -27.67 },
    { K: 250, F: -9.67 },
    { K: 260, F: 8.33 },
    { K: 270, F: 26.33 },
    { K: 290, F: 62.33 },
    { K: 290, F: 62.33 },
    { K: 300, F: 80.33 },
    { K: 400, F: 260.33 },
    { K: 500, F: 440.33 },
    { K: 600, F: 620.33 },
    { K: 700, F: 800.33 },
    { K: 800, F: 980.33 },
    { K: 900, F: 1160.33 },
    { K: 1000, F: 1340.33 },
  ];

  kelvinToFahrenheitTable.forEach(({ K, F }) => {
    expect(kelvinToFahrenheit(K)).toBeCloseTo(F);
  });
});
