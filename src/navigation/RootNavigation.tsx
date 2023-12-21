import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {OnBoardingScreen, SearchScreen} from "../screens";

export type RootStackParamList = {
  Search: undefined;
  onBoarding: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onBoarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
