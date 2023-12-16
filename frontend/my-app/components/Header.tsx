import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.halfWidth}>
          <Text style={styles.text}>Favors</Text>
        </View>
        <View style={[styles.halfWidth, styles.left_flex]}>
          <View>
            <Icon name="search" size={28} color="#E2D7C6" style={styles.searchIcon}/>
          </View>
          <View>
            <Icon2
              name="notifications"
              size={30}
              color="#E2D7C6"
              style={styles.logo}
            />
          </View>
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  left: {
    justifyContent: "space-between",
    textAlign: "center",
    alignContent: "stretch",
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
    marginLeft: 10,
  },
  searchIcon: {
    marginBottom:2
  }
});

export default Header;
