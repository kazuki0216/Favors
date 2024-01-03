import React, { useState, useContext } from "react";
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
import AppContext from "../context/Context";

type RootStackParamList = {
  Home: undefined;
  AddJob: undefined;
  Profile: undefined;
  Message: undefined;
  BookMark: undefined;
  ContactList: undefined;
};

export function useCustomNavigation() {
  const value = useContext(AppContext);
  const { controlMenu } = value;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const homeNavigation = () => {
    navigation.navigate("Home");
    controlMenu.current = "home";
  };

  const addJobNavigation = () => {
    navigation.navigate("AddJob");
    controlMenu.current = "add";
  };

  const profileNavigation = () => {
    navigation.navigate("Profile");
    controlMenu.current = "profile";
  };

  const bookMarkNavigation = () => {
    navigation.navigate("BookMark");
    controlMenu.current = "bookMark";
  };

  const messageNavigation = () => {
    navigation.navigate("Message");

    controlMenu.current = "message";
  };

  const contactlistNavigation = () => {
    navigation.navigate("ContactList");
    controlMenu.current = "ContactList";
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
    contactlistNavigation,
  };
}
