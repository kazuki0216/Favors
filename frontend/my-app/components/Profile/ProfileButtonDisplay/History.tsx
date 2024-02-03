import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const History = () => {
  return (
    <>
      <View style={style.main}>
        <Text>This is History</Text>
        {/* <Text>History Component</Text> */}
      </View>
    </>
  );
};

export default History;

const style = StyleSheet.create({
  main: {
    // backgroundColor: "red",
  },
});
