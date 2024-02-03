import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const PayPay = () => {
  return (
    <>
      <View style={style.main}>{/* <Text>PayPay Component</Text> */}</View>
    </>
  );
};

export default PayPay;

const style = StyleSheet.create({
  main: {
    // backgroundColor: "red",
  },
});
