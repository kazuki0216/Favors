import React from "react";
import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  useRef,
} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import BookMark from "react-native-vector-icons/FontAwesome";
import HomeIcon from "react-native-vector-icons/Ionicons";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import ChatIcon from "react-native-vector-icons/Entypo";
import AddIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";

type IconColors = {
  homeIcon: string;
  messageIcon: string;
  addIcon: string;
  bookmarkIcon: string;
  profileIcon: string;
};

interface Props {
  homeNavigation: () => void;
  addJobNavigation: () => void;
  profileNavigation: () => void;
  bookMarkNavigation: () => void;
  messageNavigation: () => void;
}

const ControlBar: React.FC<Props> = ({
  homeNavigation,
  addJobNavigation,
  profileNavigation,
  bookMarkNavigation,
  messageNavigation,
}) => {
  const [iconColors, setIconColors] = useState<IconColors>({
    homeIcon: "#004831",
    messageIcon: "#E2D7C6",
    addIcon: "#E2D7C6",
    bookmarkIcon: "#E2D7C6",
    profileIcon: "#E2D7C6",
  });

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
              handlePress("homeIcon");
              homeNavigation();
            }}
          >
            <HomeIcon
              name="home-outline"
              size={38}
              color={iconColors.homeIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("messageIcon");
              messageNavigation();
            }}
          >
            <ChatIcon name="chat" size={40} color={iconColors.messageIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("addIcon");
              addJobNavigation();
            }}
          >
            <AddIcon name="plus" size={40} color={iconColors.addIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("bookmarkIcon");
              bookMarkNavigation();
            }}
          >
            <BookMark
              name="bookmark-o"
              size={40}
              color={iconColors.bookmarkIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("profileIcon");
              profileNavigation();
            }}
          >
            <Account
              name="account-circle-outline"
              size={40}
              color={iconColors.profileIcon}
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
