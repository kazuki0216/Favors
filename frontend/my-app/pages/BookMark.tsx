import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/Context";
import NavigationContext from "../context/NavigationContext";
import ControlBar from "../components/ControlBar";

const BookMark = () => {
  const context = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const { goBackHome } = navigation;

  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>BookMark Page</Text>
        <View>
          <Button onPress={goBackHome} title="Go Back Home" />
        </View>
      </View>
      <ControlBar />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default BookMark;
