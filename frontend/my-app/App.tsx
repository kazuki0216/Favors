import React, { useState, useContext, createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
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
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import BookMark from "./pages/BookMark";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import AppContext from "./context/Context";

type RootStackParamList = {
  Home: undefined;
  AddJob: undefined;
  Profile: undefined;
  Message: undefined;
  BookMark: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  const [username, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

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

  return (
    <AppContext.Provider
      value={{
        username: username,
        setUserName: setUserName,
        userId: userId,
        setUserId: setUserId,
        homeNavigation: homeNavigation,
        addJobNavigation: addJobNavigation,
        profileNavigation: profileNavigation,
        bookMarkNavigation: bookMarkNavigation,
        messageNavigation: messageNavigation,
        goBackHome: goBackHome
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddJob"
            component={AddJob}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookMark"
            component={BookMark}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
