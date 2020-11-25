import ShortCity from './shortCity';
import ShortWeather from './shortWeather';

export interface DayWeather extends ShortCity {
  cityName: string;
  date: number;
  // can be received in kelvins from server
  temperature: number;
  // from 0 to 100
  humidity: number;
  wind: {
    // degrees from 0 to 360
    direction: number;
    speed: number;
  };
  // minutes from 00-00
  sunRise: number;
  sunSet: number;
  timeWeather: { time: number; weather: ShortWeather }[];
}
