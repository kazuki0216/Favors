import React from "react";
import { useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TextInput,
} from "react-native";
import ModalView from "../components/BodyJobs/Modal";

import { useNavigation } from "@react-navigation/native";
const Message = () => {
  const navigation = useNavigation();
  
  const goBackHome = () => {
    navigation.goBack();
  };
  const ws = new WebSocket(`ws://localhost:8080`)
  ws.onopen = () => {
    ws.send("Hello world")
  }

  ws.onmessage = e => {
    console.log(e.data);
  }

  ws.onerror = e => {
    // an error occurred
    console.log(e);
  };
  
  ws.onclose = e => {
    // connection closed
    console.log(e.code, e.reason);
  };

  const handleSend = () => {
    console.log("Hello world")
  }

  return (
    <>
      <View style={style.header}>
        <View style={style.backhome}>
          <View style={style.button_container}>
            <View>
              <Button onPress={goBackHome} title="<" />
            </View>
            <View>
              <Text>Justin Beiber</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.message_container}>
        <View style={style.main}>
          <Text>Hello World</Text>
          <SafeAreaView>
            <TextInput
            />
            <Button onPress={handleSend} title="SEND"/>
          </SafeAreaView>
        </View>
      </View>
    </>
  );
};
//<ModalView/>

export default Message;

const style = StyleSheet.create({
  header: {
    display: "flex",
    alignSelf: "stretch",
    paddingVertical: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
  },
  backhome: {
    flex: 1,
  },
  button_container: {
    display: "flex",
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  message_container: {
    display: "flex",
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
    justifyContent: "flex-start",
    marginLeft: 40,
  },
  main: {
    backgroundColor: "blue",
    flex: 1,
    width: 100,
    height: 100,
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
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    marginBottom: 30,
  },
});
