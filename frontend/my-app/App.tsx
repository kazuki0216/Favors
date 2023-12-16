import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import ControlBar from "./components/ControlBar";

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <ControlBar />
      <StatusBar style="auto" />
    </View>
  );
}

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
