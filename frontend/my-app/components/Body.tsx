import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Body = () => {
  return (
    <>
      <View style={styles.body}>
        <Text>This is the body section</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 0,
    alignItems: "center",
    flex: 0.865,
  },
  halfWidth: {
    flex: 1, // Take up equal space
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 30,
    width: 100,
    fontWeight: "bold",
    //fontFamily: "Preahvihear-Regular",
    color: "#E2D7C6",
    fontSize: 25,
  },
  left_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    //fontFamily: "Preahvihear-Regular",
    color: "#E2D7C6",
    fontSize: 15,
  },
  counter: {
    color: "red",
  },
  logo: {
    width: 33,
    height: 25,
    color: "#fffff",
  },
});

export default Body;
