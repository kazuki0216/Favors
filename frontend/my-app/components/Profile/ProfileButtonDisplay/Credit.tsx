import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const Credit = () => {
  return (
    <>
      <View style={style.main}>
        <View style={style.credit_card}>
          <Text>￥9000</Text>
        </View>
      </View>
    </>
  );
};

export default Credit;

const style = StyleSheet.create({
  main: {
    // backgroundColor: "red",
  },
  credit_card: {
    marginTop: 30,
    borderWidth: 1,
    width: 330,
    height: 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 0,
  },
});
