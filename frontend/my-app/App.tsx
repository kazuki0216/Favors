import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

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