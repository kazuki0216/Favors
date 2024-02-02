import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import AppContext from "../context/Context";
import ControlBar from "../components/ControlBar";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Header from "../components/Header";

const Profile = () => {
  const context = useContext(AppContext);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <Header />
      <View style={style.container}></View>
      <ControlBar />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Profile;
