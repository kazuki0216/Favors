import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import AppContext from "../context/Context";
import ControlBar from "../components/ControlBar";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
  const context = useContext(AppContext);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <View style={style.container}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={style.text}>Logout</Text>
        </TouchableOpacity>
      </View>
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
