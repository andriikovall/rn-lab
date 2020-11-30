import AppError from '../../error';
import ShortCity from '../../shortCity';

export default interface CitySelectionState {
  fetchingCities: boolean;
  cities: ShortCity[];
  error?: AppError;
}
