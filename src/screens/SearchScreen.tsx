import {StyleSheet, TextInput, View, Button} from "react-native";
import React, {useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_WEATHER_QUERY} from "../agent";
import useStorge from "../hooks/useStorge";
import {CustomInput, RootScreen, Typography} from "../components";
import {COLORS, SCALE, SIZES, FONTS, ICONS} from "../constants";

const {s, vs, ms, mvs} = SCALE;
const {SearchIcon} = ICONS;

const SearchScreen = () => {
  const [citySearched, setCitySearched] = useState("");

  const [getWeather, {data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });
  const {readData, saveData, storge} = useStorge();

  const handleOnSearch = async () => {
    const storedData = await readData(citySearched);
    console.log("chasdasdasd", storedData);

    if (storge[citySearched]) {
    } else {
      getWeather().then(res => {
        saveData(
          (res.data.weatherByCity.name as string).toLowerCase(),
          res.data.weatherByCity,
        );
      });
    }
  };
  if (data) {
    console.log("dddddddd", data.weatherByCity);
  }

  return (
    <RootScreen style={styles.root}>
      <CustomInput
        onChangeText={text => setCitySearched(text)}
        btnIcon={<SearchIcon width={s(22)} height={s(22)} />}
        value={citySearched}
        onPress={handleOnSearch}
      />

      {error && (
        <View style={styles.errorConatiner}>
          <Typography style={styles.errorText}>
            there is no city with this name
          </Typography>
        </View>
      )}

      {(data || storge[citySearched]) && <View></View>}
    </RootScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: ms(SIZES.padding),
    paddingTop: mvs(SIZES.margin),
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  errorConatiner: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ms(SIZES.base),
    paddingVertical: mvs(SIZES.padding),
    borderWidth: 1,
    borderColor: COLORS.danger,
    marginTop: mvs(SIZES.base * 5),
  },
  errorText: {
    ...FONTS.h3,
    color: COLORS.danger,
  },
});
