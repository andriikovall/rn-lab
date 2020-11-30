import AppError from '../../error';
import ShortDayWeather from '../../shortDayWeather';

export default interface DaySelectionState {
  fetchingDays: boolean;
  days: ShortDayWeather[];
  error?: AppError;
};
