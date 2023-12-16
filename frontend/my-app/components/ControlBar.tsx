import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/AntDesign";

const ControlBar = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.icons}>
          <Icon2 name="home-outline" size={38} color="#E2D7C6" />
          <Icon4 name="chat" size={40} color="#E2D7C6" />
          <Icon5 name="plus" size={40} color="#E2D7C6" />
          <Icon name="bookmark-o" size={40} color="#E2D7C6" />
          <Icon3 name="account-circle-outline" size={40} color="#E2D7C6" />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    flex: 0.14,
    borderTopWidth: 1,
    
  },
  halfWidth: {
    flex: 1, // Take up equal space
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
    flex:1
  },
});

export default ControlBar;
