import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import BookMark from "./pages/BookMark";
import Message from "./pages/Message";
import Profile from "./pages/Profile";

type RootStackParamList = {
  Home: undefined;
  AddJob: undefined;
  Profile: undefined;
  Message: undefined;
  BookMark: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
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
  );
}

// .first-color {
// 	background: #2e94b9;
// }

// .second-color {
// 	background: #475053;
// }

// .third-color {
// 	background: #acdcee;
// }

// .fourth-color {
// 	background: #f0fbff;
// }
