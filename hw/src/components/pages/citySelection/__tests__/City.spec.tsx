import React from 'react';
import City from '../City';
import { render } from '@testing-library/react-native';
import ShortCity from '../../../../models/shortCity';
import WeatherState from '../../../../enums/weatherState';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import initialAppState from '../../../../store/reducers/initialAppState';

const mockStore = configureStore();
const createMockedStore = () => mockStore(initialAppState);

const city: ShortCity = {
  id: '2131',
  name: 'something',
  temperature: 234,
  weatherState: WeatherState.CLOUDY,
};

test('should render as expected', () => {
  const { toJSON } = render(
    <Provider store={createMockedStore()}>
      <City city={city} />
    </Provider>
  );

  expect(toJSON()).toMatchSnapshot();
});

test('temperature is displayed', () => {
  const { getByTestId } = render(
    <Provider store={createMockedStore()}>
      <City city={city} />
    </Provider>
  );

  expect(() => getByTestId('City.Temperature')).not.toThrowError();
  expect(getByTestId('City.Temperature')?.children[0]?.toString()).toBeTruthy();
});

test('city name is displayed', () => {
  const { getByText } = render(
    <Provider store={createMockedStore()}>
      <City city={city} />
    </Provider>
  );

  expect(getByText(city.name)).not.toBeNull();
});

test('weather state name is displayed', () => {
  const { getByTestId } = render(
    <Provider store={createMockedStore()}>
      <City city={city} />
    </Provider>
  );

  expect(() => getByTestId('City.WeatherState')).not.toThrowError();
  expect(getByTestId('City.WeatherState')?.children[0]?.toString()).toBeTruthy();
});


