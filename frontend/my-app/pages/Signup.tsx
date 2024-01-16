import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AppContext from "../context/Context";
import NavigationContext from "../context/NavigationContext";


const Signup = () => {
  const context = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const { goBackHome } = navigation;
  return (
    <>
      <Text>This is Signup</Text>
    </>
  );
};

export default Signup;
