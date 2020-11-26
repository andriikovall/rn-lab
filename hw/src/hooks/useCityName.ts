import useSettings from './useSettings';

const useCityName = (): [string, (city: string) => void] => {
  const { settings, setSettings } = useSettings();
  const setCityName = (name: string) => setSettings({ ...settings, cityName: name });
  return [settings.cityName, setCityName];
};

export default useCityName;
