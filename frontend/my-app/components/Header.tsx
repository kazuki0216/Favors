import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import { SearchBar } from "@rneui/themed";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const pressSearch = () => {
    console.log("search icon is pressed");
    setShowSearchBar(!showSearchBar);
  };
  return (
    <>
      {showSearchBar ? (
        <View style={styles.search}>
          <TextInput />
        </View>
      ) : (
        <View style={styles.header}>
          <View style={styles.halfWidthR}>
            <Image
              source={require("../assets/favors-logo.png")}
              style={styles.image_logo}
            />
          </View>
          <View style={[styles.halfWidth, styles.left_flex]}>
            <Pressable onPress={pressSearch}>
              <Icon
                name="search"
                size={28}
                color="#E2D7C6"
                style={styles.searchIcon}
              />
            </Pressable>
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
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "relative",
    alignSelf: "stretch",
    paddingVertical: 30,
    paddingBottom: 15,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  search: {
    alignSelf: "stretch",
    paddingVertical: 50,
    paddingBottom: 0,
    borderBottomWidth: 1,
  },
  halfWidth: {
    flex: 1, // Take up equal space
    marginTop: 30,
  },
  halfWidthR: {
    flex: 1, // Take up equal space
    marginTop: 35,
    position: "absolute",
  },
  image_logo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 15,
  },

  left_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 20,
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
    marginBottom: 2,
  },
});

export default Header;
