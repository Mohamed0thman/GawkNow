import {gql} from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    weatherByCity(city: $name) {
      id
      base
      name
      main {
        temp
        feelsLike
      }
      weather {
        id
        main
        description
        icon
      }
    }
  }
`;
