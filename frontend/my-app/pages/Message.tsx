import React from "react";
import { useState, useContext, useEffect } from "react";
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
  FlatList,
} from "react-native";
import ModalView from "../components/BodyJobs/Modal";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import SEND from "react-native-vector-icons/FontAwesome";
import AppContext from "../context/Context";
import NavigationContext from "../context/NavigationContext";
import { MessageType } from "../types/message";

const Message = () => {
  const context = useContext(AppContext);
  const { username, connectedUser } = context;
  const navigation = useContext(NavigationContext);
  const { goBackHome } = navigation;
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[] | []>([]);
  const [inputOpen, setInputOpen] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [messageArr, setMessageArr] = useState([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    console.log("This is the username", username);
    console.log("You are connected with ", connectedUser);

    const webSocket = new WebSocket(`ws://127.0.0.1:8000/ws/${username}`);

    webSocket.onopen = () => {
      console.log("WebSocket Connected");
    };

    //This is the section for recieving the message from the other person
    webSocket.onmessage = (e) => {
      console.log(e.data);
      setMessage(e.data);
    };

    webSocket.onerror = (e) => {
      console.log("WebSocket Error: ", e);
    };

    webSocket.onclose = (e) => {
      console.log("WebSocket Closed: ", e.code, e.reason);
    };

    setWs(webSocket);

    return () => {
      webSocket.close();
    };
  }, [connectedUser]);

  const openInput = () => {
    setInputOpen(!inputOpen);
  };

  const handleFocus = () => {
    setInputOpen(true);
  };

  const handleBlur = () => {
    setInputOpen(false);
  };

  const handleSend = () => {
    if (ws && message !== "") {
      ws.send(JSON.stringify({ message }));
      setMessage("");
    }
  };

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const viewThreshold = 500;

    const scrollViewBottom =
      scrollY + event.nativeEvent.layoutMeasurement.height;

    // Check if the scroll position is within the threshold of your view
    if (scrollY >= viewThreshold) {
      Keyboard.dismiss();
    }
  };

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    return hours + ":" + minutes;
  };

  return (
    <>
      <View style={style.header}>
        <View style={style.backhome}>
          <View style={style.button_container}>
            <Pressable onPress={goBackHome}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}
              >
                {" "}
                ＜
              </Text>
            </Pressable>
            <View style={style.name}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, marginRight: 30 }}
              >
                {username}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <TouchableWithoutFeedback>
        <ScrollView
          style={style.container}
          // keyboardShouldPersistTaps="handled"
          onScroll={(e) => handleScroll(e)}
          //scrollEventThrottle={100}
        >
          <View style={style.incoming_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 20, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>How have you been lately?</Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 10,
                marginLeft: 5,
                paddingTop: 25,
              }}
            >
              {getCurrentTime()}
            </Text>
          </View>

          <View style={style.outgoing_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 10, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>
              How's things with Mr's Hailey??
            </Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 10,
                marginRight: 5,
                paddingTop: 25,
              }}
            >
              {getCurrentTime()}
            </Text>
          </View>
          <View style={style.incoming_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 20, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>It's pretty chill❤️</Text>
          </View>
          <View style={style.outgoing_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 10, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>That's good to hear 🔥</Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 10,
                marginRight: 5,
                paddingTop: 25,
              }}
            >
              {getCurrentTime()}
            </Text>
          </View>
          <View style={style.outgoing_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 10, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>
              I'm waiting on that Drew merch you promised me haha
            </Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 10,
                marginRight: 5,
                paddingTop: 25,
              }}
            >
              {getCurrentTime()}
            </Text>
          </View>
          <View style={style.incoming_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 20, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>
              Let me remind my manager to send it to you.
            </Text>
          </View>
          <View style={style.outgoing_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 10, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>
              You coming to Japan anytime soon?🇯🇵
            </Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 10,
                marginRight: 5,
                paddingTop: 25,
              }}
            >
              {getCurrentTime()}
            </Text>
          </View>
          <View style={style.incoming_message}>
            <Account
              name="account-circle-outline"
              size={34}
              color={"#E2D7C6"}
              style={{ marginLeft: 20, marginRight: 8, marginVertical: 10 }}
            />
            <Text style={style.message_content}>
              This is the way that people should interact with eachother. In a
              way that we can make eachother better to strive for a better
              future.
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.input_container}
      >
        <TextInput
          style={style.input}
          onChangeText={(e) => setMessage(e)}
          value={message}
          placeholder="Aa"
          multiline={true}
          numberOfLines={1}
          //onPressIn={openInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Pressable style={style.sendButton} onPress={handleSend}>
          {inputOpen && <SEND name="send" size={22} color="#004831" />}
        </Pressable>
      </KeyboardAvoidingView>
    </>
  );
};

export default Message;

const style = StyleSheet.create({
  name: { flex: 1, alignItems: "center" },
  container: {
    position: "relative",
    height: "85%",
  },
  incoming_message: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  message_content: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  outgoing_message: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 5,
  },
  input_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  input: {
    flex: 1,
    //width: 300,
    height: 40,
    overflow: "hidden",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    paddingTop: 10,
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  sendButton: {
    marginRight: 10,
  },
  header: {
    display: "flex",
    alignSelf: "stretch",
    paddingVertical: 22,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
  },
  backhome: {
    flex: 1,
  },
  button_container: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
