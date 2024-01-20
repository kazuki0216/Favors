import React from "react";
import { useState, useContext } from "react";
import AppContext from "../context/Context";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import BookMark from "react-native-vector-icons/FontAwesome";
import HomeIcon from "react-native-vector-icons/Ionicons";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import ChatIcon from "react-native-vector-icons/Entypo";
import AddIcon from "react-native-vector-icons/AntDesign";
import NavigationContext from "../context/NavigationContext";

type IconColors = {
  home: string;
  message: string;
  add: string;
  bookmark: string;
  profile: string;
};

const ControlBar = () => {
  const navigation = useContext(NavigationContext);
  const {
    homeNavigation,
    addJobNavigation,
    messageNavigation,
    bookMarkNavigation,
    profileNavigation,
    contactlistNavigation,
  } = navigation;

  const value = useContext(AppContext);
  const { activeIcon, setActiveIcon } = value;

  const handlePress = (iconName: keyof IconColors) => {
    setActiveIcon(iconName);
    switch (iconName) {
      case "home":
        homeNavigation();
        break;
      case "message":
        contactlistNavigation();
        break;
      case "add":
        addJobNavigation();
        break;
      case "bookmark":
        bookMarkNavigation();
        break;
      case "profile":
        profileNavigation();
        break;
    }
  };

  const iconColor = (iconName: string) =>
    activeIcon === iconName ? "#004831" : "#E2D7C6";

  return (
    <>
      <View style={styles.body}>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              handlePress("home");
            }}
          >
            <HomeIcon name="home-outline" size={38} color={iconColor("home")} />
          </TouchableOpacity>
          

          <TouchableOpacity
            onPress={() => {
              handlePress("message");
            }}
          >
            <ChatIcon name="chat" size={40} color={iconColor("message")} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("add");
            }}
          >
            <AddIcon name="plus" size={40} color={iconColor("add")} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("bookmark");
            }}
          >
            <BookMark
              name="bookmark-o"
              size={40}
              color={iconColor("bookmark")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("profile");
            }}
          >
            <Account
              name="account-circle-outline"
              size={40}
              color={iconColor("profile")}
            />
          </TouchableOpacity>
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
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.5,
    elevation: 0.5,
  },
});

export default ControlBar;
