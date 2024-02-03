import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import AppContext from "../context/Context";
import ControlBar from "./ControlBar";
import NavigationContext from "../context/NavigationContext";

const ContactList = () => {
  const context = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const { messageNavigation } = navigation;
  const { goBackHome, setConnectedUser, userId, username } = context;
  // const [userList, setUserList] = useState(contactList);
  const [userList, setUserList] = useState([
    {
      name: "Ryo",
      userid: "w4RHTvKTMCNcBcfoRZ8Uivgub5N2",
    },
    {
      name: "Kazuki",
      userid: "Z8NjD0csXmShaTlSAHyuMFwfj4K3",
    },
  ]);

  const handleUserClick = (user: string) => {
    setConnectedUser(user);
    messageNavigation();
  };

  const renderContactList = userList.map((user, index) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          console.log(user.name, "was clicked");
          handleUserClick(user.userid);
        }}
      >
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
      <ScrollView style={style.scroll_container}>
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
  scroll_container: {
    maxHeight: "76.5%",
  },
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
    borderColor: "gray",
  },
  name_container: {
    marginVertical: 20,
    verticalAlign: "center",
  },
  header: {
    display: "flex",
    alignSelf: "stretch",
    paddingVertical: 25,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
  },
  button_container: {
    paddingTop: 30,
  },
});
