import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/AntDesign";

type IconColors = {
  icon2: string;
  icon4: string;
  icon5: string;
  icon: string;
  icon3: string;
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
    icon2: "#E2D7C6",
    icon4: "#E2D7C6",
    icon5: "#E2D7C6",
    icon: "#E2D7C6",
    icon3: "#E2D7C6",
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
              handlePress("icon2");
              homeNavigation();
            }}
          >
            <Icon2 name="home-outline" size={38} color={iconColors.icon2} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("icon4");
              messageNavigation();
            }}
          >
            <Icon4 name="chat" size={40} color={iconColors.icon4} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("icon5");
              addJobNavigation();
            }}
          >
            <Icon5 name="plus" size={40} color={iconColors.icon5} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("icon");
              bookMarkNavigation();
            }}
          >
            <Icon name="bookmark-o" size={40} color={iconColors.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePress("icon3");
              profileNavigation();
            }}
          >
            <Icon3
              name="account-circle-outline"
              size={40}
              color={iconColors.icon3}
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
