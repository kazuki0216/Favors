import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import ControlBar from "../components/ControlBar";
import { StatusBar } from "expo-status-bar";
import AppContext from "../context/Context";
import axios from "axios";

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { userId } = context;
  const [initialMount, setInitialMount] = useState<boolean>(false);
  // const fetchInitialUserJobs = async () => {
  //   const response = axios
  //     .get(`http://localhost:8000/home/${userId}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setInitialMount(true);
  //     });
  // };

  // useEffect(() => {
  //   if (!initialMount) {
  //     fetchInitialUserJobs();
  //   }
  // }, []);
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
