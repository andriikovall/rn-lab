import mockAxios from 'jest-mock-axios';
import { hardcodedCities } from './../../store/sagas/citySelectionSagas';
import weatherService from '../../services/weatherService';

beforeEach(() => {
  mockAxios.reset();
});

test('getDayWeather performs requests on predefined cities as expected', () => {
  const cityNames: string[] = [ ...hardcodedCities ].map(c => c.name);

  Promise.all(
    cityNames.map(name => weatherService.getDayWeather(name))
  );

  cityNames.forEach((cityName) => {
    expect(mockAxios.get).toHaveBeenCalledWith('/', { params: { q: cityName } });
  });
});


