import {StyleSheet, TextInput, View, Button} from "react-native";
import React, {useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_WEATHER_QUERY} from "../agent";
import useStorge from "../hooks/useStorge";
import {RootScreen} from "../components";

const SearchScreen = () => {
  const [citySearched, setCitySearched] = useState("");
  const [cashedData, setCashedData] = useState<boolean>(false);

  const [getWeather, {data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });
  const {clearStorage, readData, saveData} = useStorge();

  const handleOnSearch = async () => {
    const storedData = await readData(citySearched);
    console.log("chasdasdasd", storedData.name);

    if (storedData) {
      setCashedData(storedData);
    } else {
      getWeather().then(res => {
        saveData(
          (res.data.weatherByCity.name as string).toLowerCase(),
          res.data.weatherByCity,
        );
      });
    }
  };

  return (
    <RootScreen>
      <TextInput
        onChangeText={text => setCitySearched(text)}
        style={{borderWidth: 1, borderColor: "red"}}
      />

      <Button title="search" onPress={handleOnSearch} />

      {data ? <View></View> : <></>}
    </RootScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
