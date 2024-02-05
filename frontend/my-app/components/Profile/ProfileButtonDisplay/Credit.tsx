import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const Credit = () => {
  return (
    <>
      <View style={style.main}>
        <View style={style.paytext}>
          <Text style={{ fontWeight: "bold" }}>PayPay Wallet</Text>
        </View>
        <View style={style.credit_card}>
          <View style={style.wave_style}>
            <View style={style.right_wave}></View>
            <View style={style.left_wave}></View>
          </View>
          <View style={style.card}>
            <Text style={style.credit_text}>残高</Text>
            <Text style={style.credit_text}>￥9000</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Credit;

const style = StyleSheet.create({
  main: {},
  paytext: {
    marginBottom: 10,
    paddingTop: 30,
  },
  credit_card: {
    marginTop: 10,
    borderWidth: 1,
    width: 340,
    height: 170,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 0,
    position: "relative",
  },
  wave_style: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  credit_text: {
    color: "white",
  },
  card: {},
  left_wave: {
    backgroundColor: "#1e1f4d",
    width: "50%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  right_wave: {
    backgroundColor: "#121244",
    width: "50%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
