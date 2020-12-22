import { DayWeather } from './../../models/dayWeather';
import OpenweatherResponse from '../../models/openweather/openweatherResponse';
import WeatherState from '../../enums/weatherState';
import numberInRange from '../numberInRange';
import OpenweatherWeather from '../../models/openweather/weather';
import ShortWeather from '../../models/shortWeather';
import { IWeatherAPIResultMapper } from './IWeatherAPIResultMapper';
import ShortDayWeather from '../../models/shortDayWeather';
import datesEqualInCalendar from '../datesEqualInCalendar';

class OpenweatherResultMapper implements IWeatherAPIResultMapper {

  mapResponseStateToWeatherStateEnum(id: number): WeatherState {
    switch (true) {
      case numberInRange(id, 200, 232): return WeatherState.THUNDERSTORM;
      case numberInRange(id, 300, 302): return WeatherState.FOG;
      case numberInRange(id, 303, 531): return WeatherState.RAINY;
      case numberInRange(id, 600, 622): return WeatherState.SNOWY;
      // has to be replaced in future. No corresponding icon found
      case numberInRange(id, 700, 781): return WeatherState.FOG;
      //
      case numberInRange(id, 800, 800): return WeatherState.SUNNY;
      case numberInRange(id, 801, 801): return WeatherState.MOSTLY_SUNNY;
      case numberInRange(id, 802, 804): return WeatherState.CLOUDY;
      default: return WeatherState.UNSET;
    }
  }

  mapResponseToDayWeather(res: OpenweatherResponse, dayOffset: number = 0): DayWeather {
    if (dayOffset < 0) {
      dayOffset = 0;
    }
    // every day has 8 weather objects in list
    // to move to the next day we have to find index with an offseted day
    let offsetIndex = 0;
    let offsetCount = 0;
    for (let i = 0; i < res.list.length - 1 && dayOffset !== offsetCount; i++) {
      const timeWeather = res.list[i].dt * 1000;
      const nextTimeWeather = res.list[i + 1].dt * 1000;
      if (!datesEqualInCalendar(timeWeather, nextTimeWeather)) {
        offsetCount++;
      }
      offsetIndex++;
    }
    const currentWeather: OpenweatherWeather = res.list[offsetIndex];
    const timeWeather: { time: number; weather: ShortWeather; }[] =
      res.list.slice(offsetIndex).map(apiWeather => ({
        time: apiWeather.dt * 1000,
        weather: {
          state: this.mapResponseStateToWeatherStateEnum(apiWeather.weather[0].id),
          temperature: apiWeather.main.temp,
        },
      }));

    return {
      cityName: res.city.name,
      date: currentWeather.dt * 1000,
      humidity: currentWeather.main.humidity,
      id: res.city.id.toString(),
      name: res.city.name,
      sunRise: res.city.sunrise * 1000,
      sunSet: res.city.sunset * 1000,
      temperature: currentWeather?.main.temp,
      timeWeather: timeWeather,
      weatherState: this.mapResponseStateToWeatherStateEnum(currentWeather.weather[0].id),
      wind: {
        direction: currentWeather.wind.deg,
        speed: currentWeather.wind.speed,
      },
    };
  }

  mapResponseToShortDaysWeather(res: OpenweatherResponse): ShortDayWeather[] {
    const timeWeather: ShortDayWeather[] = res.list.map(apiWeather => ({
      temperatureFrom: apiWeather.main.temp_min,
      temperatureTo: apiWeather.main.temp_max,
      date: apiWeather.dt * 1000,
      weatherState: this.mapResponseStateToWeatherStateEnum(apiWeather.weather[0].id),
    }));

    const result: ShortDayWeather[] = [];
    // after this API call we have several weather states and temperatures per 1 day
    // I combine all day responses into one to fit app's logic
    for (let i = 0; i < timeWeather.length - 1; i++) {
      const day: ShortDayWeather = {
        ...timeWeather[i],
      };
      let dayWeathersCount = 0;
      while (datesEqualInCalendar(timeWeather[i]?.date, timeWeather[i + 1]?.date)) {
        dayWeathersCount++;
        if (timeWeather[i + 1].temperatureTo > day.temperatureTo) {
          day.temperatureTo = timeWeather[i + 1].temperatureTo;
        }
        if (timeWeather[i + 1].temperatureFrom < day.temperatureFrom) {
          day.temperatureFrom = timeWeather[i + 1].temperatureFrom;
        }
        i++;
      }
      // to set weather state of the middle of the day
      day.weatherState = timeWeather[i - Math.floor(dayWeathersCount / 2)].weatherState;
      result.push(day);
    }
    return result;
  }
}

export default new OpenweatherResultMapper();
