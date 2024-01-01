import React, { useState } from "react";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  AddJob: undefined;
  Profile: undefined;
  Message: undefined;
  BookMark: undefined;
};

export function useCustomNavigation() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const homeNavigation = () => {
    navigation.navigate("Home");
  };

  const addJobNavigation = () => {
    navigation.navigate("AddJob");
  };

  const profileNavigation = () => {
    navigation.navigate("Profile");
  };

  const bookMarkNavigation = () => {
    navigation.navigate("BookMark");
  };

  const messageNavigation = () => {
    navigation.navigate("Message");
  };

  const goBackHome = () => {
    navigation.goBack();
  };

  return {
    homeNavigation,
    addJobNavigation,
    profileNavigation,
    messageNavigation,
    goBackHome,
    bookMarkNavigation,
  };
}
