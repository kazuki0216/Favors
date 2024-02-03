import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const Calendar = () => {
  return (
    <>
      <View style={style.main}>
        <Text>This is Calendar</Text>
        {/* <Text>Calendar Component</Text> */}
      </View>
    </>
  );
};

export default Calendar;

const style = StyleSheet.create({
  main: {
    // backgroundColor: "red",
  },
});
