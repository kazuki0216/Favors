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

  const [iconColors, setIconColors] = useState<IconColors>({
    home: "#004831",
    message: "#E2D7C6",
    add: "#E2D7C6",
    bookmark: "#E2D7C6",
    profile: "#E2D7C6",
  });
  const value = useContext(AppContext);
  const { controlMenu } = value;

  const handlePress = (iconName: keyof IconColors) => {
    setIconColors((prevColors: any) => {
      const updatedColors: IconColors = Object.keys(prevColors).reduce(
        (acc, key) => {
          acc[key as keyof IconColors] =
            key === iconName
              ? prevColors[key as keyof IconColors] === "#E2D7C6"
                ? "#004831"
                : "#E2D7C6"
              : "#E2D7C6"; // Reset the color for other icons
          return acc;
        },
        {} as IconColors
      );
      return updatedColors;
    });
  };
  return (
    <>
      <View style={styles.body}>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              homeNavigation();
              handlePress(controlMenu.current);
            }}
          >
            <HomeIcon name="home-outline" size={38} color={iconColors.home} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              contactlistNavigation();
              handlePress(controlMenu.current);
            }}
          >
            <ChatIcon name="chat" size={40} color={iconColors.message} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              addJobNavigation();
              handlePress(controlMenu.current);
            }}
          >
            <AddIcon name="plus" size={40} color={iconColors.add} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              bookMarkNavigation();
              handlePress(controlMenu.current);
            }}
          >
            <BookMark name="bookmark-o" size={40} color={iconColors.bookmark} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              profileNavigation();
              handlePress(controlMenu.current);
            }}
          >
            <Account
              name="account-circle-outline"
              size={40}
              color={iconColors.profile}
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
