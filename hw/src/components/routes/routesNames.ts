const routesNames = {
  LOGIN:            'login',
  CITY_SELECTION:   'citySelection',
  DAY_SELECTION:    'daySelection',
  WEATHER_DETAILS:  'weatherDetails',
  SETTINGS:         'settings',
  HOME:             'home',
};

export const isRouteName = (route: string): boolean => {
  return Object.values(routesNames).includes(route);
};

export default routesNames;
