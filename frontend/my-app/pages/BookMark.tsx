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

const BookMark = () => {
  const navigation = useNavigation();

  const goBackHome = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>BookMark Page</Text>
        <View>
          <Button onPress={goBackHome} title="Go Back Home" />
        </View>
      </View>
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
  },
});

export default BookMark;
