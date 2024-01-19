import React from "react";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppContext from "../context/Context";
import NavigationContext from "../context/NavigationContext";
import ControlBar from "../components/ControlBar";
import Header from "../components/Header";

const AddJobPage = () => {
  const context = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const { goBackHome } = navigation;
  return (
    <>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Favorsの追加</Text>
        <View style={style.input_container}>
          <TextInput
            placeholder="Favorsタイトル"
            style={style.input_container}
          />
          <TextInput placeholder="詳細" style={style.input_container} />
          <TextInput placeholder="値段" style={style.input_container} />
          <View style={style.formAction}>
            <TouchableOpacity>
              <View style={style.btn}>
                <Text style={style.btnText}>Add</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.btn}>
                <Text style={style.btnText}>Cancel</Text>
              </View>
            </TouchableOpacity>
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
    justifyContent: "space-evenly",
    textAlign: "center",
  },
  input_container: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    paddingVertical: 15,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 5,
    fontWeight: "bold",
  },

  addjob_title: {
    display: "flex",
    justifyContent: "center",
  },
  formAction: {
    marginTop: 24,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 8,
    backgroundColor: "#004831",
    borderColor: "#004831",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "left",
    marginLeft: 20,
  },
});

export default AddJobPage;
