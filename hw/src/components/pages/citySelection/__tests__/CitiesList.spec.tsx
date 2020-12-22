import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CitiesList from '../CitiesList';
import ShortCity from '../../../../models/shortCity';
import WeatherState from '../../../../enums/weatherState';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import initialAppState from '../../../../store/reducers/initialAppState';

const mockStore = configureStore();
const createMockedStore = () => mockStore(initialAppState);

const mockedCities: ShortCity[] = [
  { id: '1', name: 'someName', temperature: 213, weatherState: WeatherState.FOG },
  { id: '2', name: 'someName2', temperature: 213, weatherState: WeatherState.MOSTLY_SUNNY },
  { id: '3', name: 'someName3', temperature: 213, weatherState: WeatherState.THUNDERSTORM },
];


test('renders all cities as expected', () => {
  // don't change for snapshot testing persistance
  const cities: ShortCity[] = [
    { id: '1', name: 'someName', temperature: 213, weatherState: WeatherState.FOG },
    { id: '2', name: 'someName2', temperature: 213, weatherState: WeatherState.MOSTLY_SUNNY },
    { id: '3', name: 'someName3', temperature: 213, weatherState: WeatherState.THUNDERSTORM },
  ];
  //
  const { toJSON } = render(
    <Provider store={createMockedStore()}>
      <CitiesList onCityPressed={() => { }} loadingCities={false} cities={cities} />
    </Provider>
  );
  expect(toJSON()).toMatchSnapshot();
});

test('shows not found text if cities list is empty and they finished loading', () => {
  const { getByTestId } = render(<CitiesList onCityPressed={() => { }} loadingCities={false} cities={[]} />);
  expect(getByTestId('CitiesList.NotFoundText')).not.toBeNull();
});


test('hides not found text if cities list is loading', () => {
  const { getByTestId } = render(
    <Provider store={createMockedStore()}>
      <CitiesList onCityPressed={() => { }} loadingCities={true} cities={[]} />
    </Provider>
  );
  expect(() => getByTestId('CitiesList.NotFoundText')).toThrowError();
});

test('hides not found text if cities list finished loading and it is not empty', () => {
  const { getByTestId } = render(
    <Provider store={createMockedStore()}>
      <CitiesList onCityPressed={() => { }} loadingCities={false} cities={mockedCities} />
    </Provider>
  );
  expect(() => getByTestId('CitiesList.NotFoundText')).toThrowError();
});

test('onCityPressed callback works as expected and cities passed correctly', () => {
  const onCityPressed = jest.fn();
  const { getAllByTestId } = render(
    <Provider store={createMockedStore()}>
      <CitiesList onCityPressed={onCityPressed} loadingCities={false} cities={mockedCities} />
    </Provider>
  );

  const citiesElements = getAllByTestId(/CitiesList.City./);
  expect(citiesElements).toHaveLength(mockedCities.length);
  citiesElements.forEach((element, index) => {
    fireEvent.press(element);
    expect(onCityPressed).toHaveBeenCalledTimes(index + 1);
    expect(onCityPressed).toHaveBeenLastCalledWith(mockedCities[index]);
  });
});
