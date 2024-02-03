import React, { useEffect } from "react";
import { useState, useContext } from "react";
import AppContext from "../../context/Context";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
} from "react-native";

const PayPay = () => {
  const [settingList, setSettingList] = useState([]);
  const context = useContext(AppContext);
  const { userName, email } = context;
  return (
    <>
      <View>
        <Text>Full Name</Text>
        <Text></Text>
      </View>
    </>
  );
};

export default PayPay;

const style = StyleSheet.create({});
