import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableHighlight
} from "react-native";

const Body = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.card_section}>
          <View style={styles.container}>
            <View style={styles.card_styling}>
              <Text>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Text>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Text>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Text>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Text>コーヒーのデリバリー</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1.25,
    shadowRadius: 5,
    elevation: 5,
  },
  card_section: {
    flex: 0.95,
    width: 350,
    backgroundColor: "#7F8E6A",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    maxHeight: 600,
    padding: 10,
  },
  container: {
    alignItems: "center",
  },
  card_styling: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    width: 300,
    height: 200,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3,
    elevation: 5,
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
