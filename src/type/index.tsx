type Coordinates = {
  lon: number;
  lat: number;
};

type Weather = {
  id: number;
  main: String;
  description: String;
  icon: String;
};

type WeatherTemp = {
  temp: number;
  feelsLike: number;
};

export type WeatherResponse = {
  id: String;
  name: String;
  base: String;
  coord: Coordinates;
  main: WeatherTemp;
  weather: Weather[];
};
