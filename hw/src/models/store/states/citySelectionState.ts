import ShortCity from '../../shortCity';

export default interface CitySelectionState {
  fetchingCities: boolean;
  cities: ShortCity[];
}
