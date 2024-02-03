import React from "react";
import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import AppContext from "../context/Context";
import ControlBar from "../components/ControlBar";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Header from "../components/Header";

const Profile = () => {
  const context = useContext(AppContext);
  const { userName } = context;
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.header_container}>
            <View>
              <Image
                source={require("../assets/profile-pic.jpg")}
                style={[style.profile_pic]}
              />
            </View>
            <View>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 25 }}
              >
                {userName}
              </Text>
            </View>
          </View>
        </View>
        <View style={style.body}>
          <View>
            <Text>PayPay 財布</Text>
            <Text>プロフィールの編集</Text>
            <Text></Text>
          </View>
        </View>
      </View>
      <ControlBar />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignContent: "center",
  },
  header: {
    display: "flex",
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: "#004831",
    borderBottomWidth: 1,
    justifyContent: "space-around",
  },
  header_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  profile_pic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  body: {},
});

export default Profile;
