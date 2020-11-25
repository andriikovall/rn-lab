import axios from 'axios';
import weatherAPI from '../config/weatherAPI';
import weatherAPIConfig from '../config/weatherAPI';

export const weatherApi = axios.create({
  baseURL: weatherAPIConfig.baseURL,
  params: { appid: weatherAPI.appid },
});
