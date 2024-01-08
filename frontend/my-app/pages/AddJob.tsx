import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
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
        <View style={style.input_container}>
          <View style={style.addjob_title}>
            {/* <Text style={{}}>Add a Job</Text> */}
          </View>
          <TextInput placeholder="Name" style={style.input_styling} />
          <TextInput placeholder="Location" style={style.input_styling} />
          <TextInput placeholder="Description" style={style.input_styling} />
          <TextInput placeholder="Price" style={style.input_styling} />
          <View style={style.button_container}>
            <Button onPress={() => console.log("Pressed")} title="Cancel" />
            <Button onPress={() => console.log("Pressed")} title="Add" />
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
    justifyContent: "center",
    textAlign: "center",
  },
  input_container: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 10,
  },
  input_styling: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  addjob_title: {
    display: "flex",
    justifyContent: "center",
  },
  button_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button_styling: {
    borderWidth: 1,
    borderColor: "black",
  },
});

export default AddJobPage;
