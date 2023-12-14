import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.halfWidth}>
          <Text style={styles.text}>Favors</Text>
        </View>
        <View style={[styles.halfWidth, styles.left_flex]}>
          <Text style={styles.left}>Home</Text>
          <Text style={styles.left}>SearchIcon</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: "stretch",
    padding: 30,
    backgroundColor: "#303242",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
});

export default Header;
