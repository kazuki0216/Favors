import React from "react";
import { useContext, useState } from "react";
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
import PayPay from "../components/Profile/PayPay";
import ProfileButton from "../components/Profile/ProfileButton";
import Calendar from "../components/Profile/ProfileButtonDisplay/Calendar";
import Credit from "../components/Profile/ProfileButtonDisplay/Credit";
import History from "../components/Profile/ProfileButtonDisplay/History";

const Profile = () => {
  const context = useContext(AppContext);
  const { userName, email } = context;
  const [clickedButton, setClickedButton] = useState("Credit");
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.header_container}>
            <View style={style.profile_container}>
              <Image
                source={require("../assets/profile-pic.jpg")}
                style={[style.profile_pic]}
              />
            </View>
            <View>
              {/* <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 25 }}
              >
                {userName}
              </Text> */}
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 25 }}
              >
                ユーザーA
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 12.5 }}
              >
                Email: test123@gmail.com
              </Text>
              {/* <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 12.5 }}
              >
                Email: {email}
              </Text> */}
            </View>
          </View>
        </View>
        <View style={style.body}>
          {/* <PayPay /> */}
          {clickedButton === "Credit" ? (
            <Credit />
          ) : clickedButton === "History" ? (
            <History />
          ) : (
            <Calendar />
          )}
          <View style={style.profile_button}>
            <ProfileButton setClickedButton={setClickedButton} />
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
    justifyContent: "space-around",
    position: "relative",
  },
  header_container: {
    width: "100%",
    top: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    paddingTop: 70,
    paddingBottom: 80,
    backgroundColor: "#004831",
  },
  profile_pic: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  profile_container: {
    shadowColor: "white",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1.25,
    shadowRadius: 5,
  },
  body: {
    zIndex: 1,
    marginTop: 230,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    height: "80%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profile_button: {
    marginTop: 140,
  }
});

export default Profile;
