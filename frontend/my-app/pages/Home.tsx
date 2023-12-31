import React, { useCallback, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import ControlBar from "../components/ControlBar";
import { StatusBar } from "expo-status-bar";
import AppContext from "../context/Context";

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { goBackHome } = context;
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Body />
        <ControlBar />
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
