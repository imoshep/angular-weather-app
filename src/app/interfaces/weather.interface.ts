export interface Weather {
  id: number;
  iconSrc: string;
  location: string;
  sampledAtDayHour: string;
  currentTempCelsius: string;
  verbalDesc: string;
  precipitation: string;
  humidity: string;
  windSpeed: string;
}
