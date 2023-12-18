import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp, NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import Header from "../components/Header";
import Body from "../components/Body";
import ControlBar from "../components/ControlBar";
import { StatusBar } from "expo-status-bar";

type RootStackParamList = {
  Home: undefined;
  AddJob: undefined;
  Profile: undefined;
  Message: undefined;
  BookMark: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const homeNavigation = () => {
    navigation.navigate("Home")
  }
  const addJobNavigation = () => {
    navigation.navigate("AddJob")
  }
  const profileNavigation = () => {
    navigation.navigate("Profile")
  }
  const bookMarkNavigation = () => {
    navigation.navigate("BookMark")
  }
  const messageNavigation = () => {
    navigation.navigate("Message")
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Body />
        <ControlBar 
        homeNavigation={homeNavigation}
        addJobNavigation={addJobNavigation}
        profileNavigation={profileNavigation}
        bookMarkNavigation={bookMarkNavigation}
        messageNavigation={messageNavigation}

        />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    margin: 0,
    padding: 0,
  },
  texts: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
