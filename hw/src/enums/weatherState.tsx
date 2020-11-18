enum WeatherState {
  UNSET = -1,

  CLOUDY,
  SUNNY,

  RAINY,
  THUNDERSTORM,
  FOG,
  TORNADO,

  MOSTLY_CLOUDY,
  MOSTLY_SUNNY,

  SNOWY,
  // @todo add more short weather summary
}

interface WeatherStateEnumProps {
  readableName: string;
  iconName: string;
}

const stateToPropsMap = new Map<WeatherState, WeatherStateEnumProps>([
  [WeatherState.CLOUDY, { readableName:'Cloudy', iconName: 'cloud' }],
  [WeatherState.FOG, { readableName:'Fog', iconName: 'cloud-drizzle' }],
  [WeatherState.MOSTLY_CLOUDY, { readableName: 'Mostly cloudy', iconName: 'cloud' }],
  [WeatherState.MOSTLY_SUNNY, { readableName: 'Mostly sunny', iconName: 'sun' }],
  [WeatherState.RAINY, { readableName: 'Rainy', iconName: 'cloud-rain' }],
  [WeatherState.SUNNY, { readableName: 'Sunny', iconName: 'sun' }],
  [WeatherState.THUNDERSTORM, { readableName: 'Ah.. shit', iconName: 'cloud-lightning' }],
  [WeatherState.TORNADO, { readableName: 'We all gonna die -_-', iconName: 'wind' }],
  [WeatherState.SNOWY, { readableName: 'Snowy, yah...', iconName: 'cloud-snow' }],
  [WeatherState.UNSET, { readableName: '', iconName: 'help-circle' }],
]);

export const getReadableStateName = (state: WeatherState): string => {
  return stateToPropsMap.get(state)?.readableName ??
          (stateToPropsMap.get(WeatherState.UNSET)?.readableName || '');
};

export const getIconName = (state: WeatherState): string => {
  return stateToPropsMap.get(state)?.iconName ??
                    (stateToPropsMap.get(WeatherState.UNSET)?.iconName || '');
};

export default WeatherState;
