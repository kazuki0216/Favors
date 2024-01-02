import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Pressable,
} from "react-native";
import ModalView from "../components/BodyJobs/Modal";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import SEND from "react-native-vector-icons/FontAwesome";
import AppContext from "../context/Context";
import { contactList } from "./DummyData";
import ControlBar from "./ControlBar";

const ContactList = () => {
  const context = useContext(AppContext);
  const { goBackHome } = context;
  const [userList, setUserList] = useState(contactList);

  //   useEffect(() => {
  //     setUserList(contactList);
  //   }, []);

  const renderContactList = userList.map((user, index) => {
    return (
      <TouchableWithoutFeedback key={index}>
        <View style={style.listStyling}>
          <View style={style.name_container}>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 20 }}>
              {user.name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  });
  return (
    <>
      <View style={style.header}>
        <View style={style.button_container}>
          <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 10 }}>
            Chats
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={style.contactlist_container}>
          <View>{renderContactList}</View>
        </View>
      </ScrollView>
      <ControlBar />
    </>
  );
};

export default ContactList;

const style = StyleSheet.create({
  contactlist_container: {
    flex: 1,
    alignItems: "flex-start",
  },
  name: { flex: 1, alignItems: "center" },
  container: {
    position: "relative",
    height: "85%",
  },
  listStyling: {
    borderBottomWidth: 1,
    width: 500,
  },
  name_container: {
    marginVertical: 30,
    verticalAlign: "center",
  },
  header: {
    display: "flex",
    alignSelf: "stretch",
    paddingVertical: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
  },
  button_container: {
    paddingTop: 30,
  },
});
