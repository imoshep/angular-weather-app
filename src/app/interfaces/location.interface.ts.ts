import { Weather } from './weather.interface';

export interface LocationInterface {
  name: string;
  data?: Weather;
  error?: string;
}
