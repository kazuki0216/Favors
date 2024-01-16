import React, { useState, useRef, useEffect, ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useCustomNavigation } from "./hooks/CustomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import BookMark from "./pages/BookMark";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import Authentication from "./pages/Authentication";
import AppContext from "./context/Context";
import ContactList from "./components/ContactList";
import NavigationContext from "./context/NavigationContext";
import useAuth from "./hooks/useAuth";

type RootStackParamList = {
  Home: undefined;
  AddJob: undefined;
  Profile: undefined;
  Message: undefined;
  BookMark: undefined;
  ContactList: undefined;
  Authentication: undefined;
};

interface Props {
  children: ReactNode;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationProvider = ({ children }: Props) => {
  const navigationFunctions = useCustomNavigation();
  return (
    <NavigationContext.Provider value={navigationFunctions}>
      {children}
    </NavigationContext.Provider>
  );
};

export default function App() {
  const [username, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [activeIcon, setActiveIcon] = useState<string>("home");
  const [connectedUser, setConnectedUser] = useState<string>("");
  const { user } = useAuth();

  if (user) {
    return (
      <AppContext.Provider
        value={{
          username,
          setUserName,
          userId,
          setUserId,
          activeIcon,
          setActiveIcon,
          connectedUser,
          setConnectedUser,
        }}
      >
        <NavigationContainer>
          <NavigationProvider>
            <Stack.Navigator initialRouteName="Home">
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
                name="ContactList"
                component={ContactList}
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
          </NavigationProvider>
        </NavigationContainer>
      </AppContext.Provider>
    );
  } else {
    return (
      <AppContext.Provider
        value={{
          username,
          setUserName,
          userId,
          setUserId,
          activeIcon,
          setActiveIcon,
          connectedUser,
          setConnectedUser,
        }}
      >
        <NavigationContainer>
          <NavigationProvider>
            <Stack.Navigator initialRouteName="Authentication">
              <Stack.Screen
                name="Authentication"
                component={Authentication}
                options={{ headerShown: false }}
              />
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
                name="ContactList"
                component={ContactList}
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
          </NavigationProvider>
        </NavigationContainer>
      </AppContext.Provider>
    );
  }

  useEffect(() => {
    setUserName("Kazuki");
  }, []);
}
