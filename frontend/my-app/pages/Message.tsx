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
} from "react-native";

import { useNavigation } from "@react-navigation/native";
const Message = () => {
  const navigation = useNavigation();

  const goBackHome = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>Message Page</Text>
        <View>
          <Button onPress={goBackHome} title="Go Back Home" />
        </View>
      </View>
    </>
  );
};

export default Message;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
