/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React, {useEffect} from "react";
import {Platform, SafeAreaView, StyleSheet} from "react-native";
import {SCALE} from "./constants";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigation from "./navigation/RootNavigation";
import SplashScreen from "react-native-splash-screen";
import useStorge from "./hooks/useStorge";

const {mvs} = SCALE;

function App(): JSX.Element {
  const {importData} = useStorge();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://10.0.2.2:4000/",
  });

  useEffect(() => {
    importData().then(() => SplashScreen.hide());
  }, []);

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider style={styles.rootScreen}>
        <RootNavigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {paddingTop: Platform.OS === "ios" ? mvs(40) : 0},
});

export default App;
