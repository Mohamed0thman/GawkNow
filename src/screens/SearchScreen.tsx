import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, {useCallback, useState} from "react";
import {useQuery, useReadQuery} from "@apollo/client";
import {GET_WEATHER_QUERY} from "../agent";
import {CustomInput, RootScreen, Row, Spinner, Typography} from "../components";
import {COLORS, SCALE, SIZES, FONTS, ICONS} from "../constants";
import {WeatherResponse} from "../type";
import debounce from "lodash/debounce";

const {s, ms, mvs} = SCALE;
const {SearchIcon} = ICONS;

const SearchScreen = () => {
  const [citySearched, setCitySearched] = useState("");

  const {data, loading, error} = useQuery<{
    weatherByCity: WeatherResponse;
  }>(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });
  console.log("loading", loading);

  const debouncedHandleSearch = useCallback(debounce(setCitySearched, 500), []);

  let content;
  if (loading) {
    content = <Spinner />;
  } else if (error && citySearched.length) {
    content = (
      <View>
        <Typography style={{...FONTS.h3, color: COLORS.danger}}>
          no city with this name
        </Typography>
      </View>
    );
  } else if (data) {
    content = (
      <View style={styles.resultConatiner}>
        <Row justifyContent="space-between" style={styles.row}>
          <Typography style={styles.baseText}>
            name:
            {data.weatherByCity.name}
          </Typography>
          <Typography style={styles.baseText}>
            id: {data.weatherByCity.id}
          </Typography>
        </Row>

        <Row justifyContent="space-between" style={styles.row}>
          <Typography style={styles.baseText}>
            temp:
            {data.weatherByCity.main.feelsLike}
          </Typography>
          <Typography style={styles.baseText}>
            like: {data.weatherByCity.main.temp}
          </Typography>
        </Row>

        <Row justifyContent="space-between" style={styles.row}>
          <Typography style={styles.baseText}>
            status: {data.weatherByCity.weather[0].main}
          </Typography>
          <Typography style={styles.baseText}>
            sky: {data.weatherByCity.weather[0].description}
          </Typography>
        </Row>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <RootScreen style={styles.root}>
            <CustomInput
              onChangeText={text => debouncedHandleSearch(text)}
              btnIcon={
                <SearchIcon width={s(22)} height={s(22)} fill={COLORS.white} />
              }
            />
            {content}
          </RootScreen>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  root: {
    paddingHorizontal: ms(SIZES.padding),
    paddingTop: mvs(SIZES.margin),
  },
  row: {
    marginBottom: mvs(SIZES.base),
  },

  resultConatiner: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: ms(SIZES.padding),
    paddingVertical: mvs(SIZES.margin),
    marginTop: mvs(SIZES.margin),
    borderRadius: s(SIZES.radius),
  },
  baseText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});
