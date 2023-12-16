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
  TouchableHighlight,
} from "react-native";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

const Body = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.card_section}>
          <View style={styles.container}>
            <View style={styles.card_styling}>
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.text}>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.text}>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.text}>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.text}>コーヒーのデリバリー</Text>
            </View>
            <View style={styles.card_styling}>
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.text}>コーヒーのデリバリー</Text>
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
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: 300,
    height: 150,
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

  text: {
    fontWeight: "bold",
    color: "#E2D7C6",
    marginTop: 10,
    fontSize: 20,
  },
});

export default Body;
