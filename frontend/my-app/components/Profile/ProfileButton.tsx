import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Fontisto";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

interface Props {
  setClickedButton: Dispatch<SetStateAction<string>>;
}

const ProfileButton: React.FC<Props> = ({ setClickedButton }) => {
  return (
    <>
      <View style={style.main}>
        <View>
          <TouchableOpacity onPress={() => setClickedButton("Credit")}>
            <View style={style.icon_container}>
              <AntDesign
                name="creditcard"
                size={42}
                style={{ color: "grey" }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setClickedButton("Calendar")}>
            <View style={style.icon_container}>
              <AntDesign name="calendar" size={40} style={{ color: "grey" }} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setClickedButton("History")}>
            <View style={style.icon_container}>
              <Icon3 name="history" size={35} style={{ color: "grey" }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileButton;

const style = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  icon_container: {
    padding: 30,
    backgroundColor: "#F0F0F0",
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 0.5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 0.5,
  },
  button_label: {
    marginTop: 10,
    alignItems: "center",
  },
});
