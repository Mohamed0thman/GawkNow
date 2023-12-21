import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, {useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_WEATHER_QUERY} from "../agent";
import useStorge from "../hooks/useStorge";
import {CustomInput, RootScreen, Row, Spinner, Typography} from "../components";
import {COLORS, SCALE, SIZES, FONTS, ICONS} from "../constants";
import {showMessage} from "react-native-flash-message";
import {WeatherResponse} from "../type";

const {s, ms, mvs} = SCALE;
const {SearchIcon} = ICONS;

const SearchScreen = () => {
  const [citySearched, setCitySearched] = useState("");
  const [data, setDate] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [getWeather] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });

  const {saveData, storge} = useStorge();

  const handleOnSearch = async () => {
    if (!citySearched.length) {
      showMessage({
        message: "add city name",
        type: "danger",
      });
      return;
    }

    setDate(null);
    Keyboard.dismiss();
    if (storge[citySearched]) {
      setDate(storge[citySearched]);
    } else {
      setLoading(true);

      getWeather()
        .then(res => {
          if (res?.data?.weatherByCity) {
            setDate(res.data.weatherByCity);
            saveData(
              (res.data.weatherByCity.name as string).toLowerCase(),
              res.data.weatherByCity,
            );
          }
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <RootScreen style={styles.root}>
            <CustomInput
              onChangeText={text => setCitySearched(text)}
              btnIcon={
                <SearchIcon width={s(22)} height={s(22)} fill={COLORS.white} />
              }
              value={citySearched}
              onPress={handleOnSearch}
            />

            {loading && <Spinner />}

            {data && (
              <View style={styles.resultConatiner}>
                <Row justifyContent="space-between" style={styles.row}>
                  <Typography style={styles.baseText}>
                    name:
                    {data.name}
                  </Typography>
                  <Typography style={styles.baseText}>id: {data.id}</Typography>
                </Row>

                <Row justifyContent="space-between" style={styles.row}>
                  <Typography style={styles.baseText}>
                    temp:
                    {data.main.feelsLike}
                  </Typography>
                  <Typography style={styles.baseText}>
                    like: {data.main.temp}
                  </Typography>
                </Row>

                <Row justifyContent="space-between" style={styles.row}>
                  <Typography style={styles.baseText}>
                    status: {data.weather[0].main}
                  </Typography>
                  <Typography style={styles.baseText}>
                    sky: {data.weather[0].description}
                  </Typography>
                </Row>
              </View>
            )}
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
