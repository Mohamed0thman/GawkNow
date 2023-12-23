/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React, {useEffect} from "react";
import {Platform, StyleSheet} from "react-native";
import {SCALE} from "./constants";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigation from "./navigation/RootNavigation";
import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";
import {AsyncStorageWrapper, persistCache} from "apollo3-cache-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {mvs} = SCALE;

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://10.0.2.2:4000/",
});

function App(): JSX.Element {
  useEffect(() => {
    persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
    }).then(() => SplashScreen.hide());
  }, []);

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider style={styles.rootScreen}>
        <FlashMessage position="top" />

        <RootNavigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {paddingTop: Platform.OS === "ios" ? mvs(40) : 0},
});

export default App;
