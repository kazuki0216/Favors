import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.texts}>Favors</Text>
      <Body />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  texts: {
    color: "white",
    fontWeight: "bold",
  },
});
