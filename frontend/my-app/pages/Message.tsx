import React from "react";
import { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Pressable,
  FlatList,
} from "react-native";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import SEND from "react-native-vector-icons/FontAwesome";
import AppContext from "../context/Context";
import NavigationContext from "../context/NavigationContext";
import { MessageType } from "../types/message";
import uuid from "react-native-uuid";
import useAuth from "../hooks/useAuth";

const Message = () => {
  const context = useContext(AppContext);
  const { username, connectedUser, setUserName, userId } = context;
  const navigation = useContext(NavigationContext);
  const { goBackHome } = navigation;
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[] | []>([]);
  const [inputOpen, setInputOpen] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [messageArr, setMessageArr] = useState<MessageType[] | []>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const { user } = useAuth();

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    return hours + ":" + minutes;
  };

  useEffect(() => {
    console.log(connectedUser);
    const webSocket = new WebSocket(`ws://localhost:8000/ws/${connectedUser}`);

    webSocket.onopen = () => {
      console.log("WebSocket Connected");
    };

    //This is the section for recieving the message from the other person
    webSocket.onmessage = (e) => {
      const parsedData = JSON.parse(e.data);
      const message = JSON.parse(parsedData.message);
      setMessageArr((prev) => [...prev, message]);
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
      const messageObj: MessageType = {
        messageId: uuid.v4() as string,
        senderId: username,
        message: message,
        timestamp: getCurrentTime(),
        receiverId: connectedUser,
      };

      setMessageArr((prev) => [...prev, messageObj]);
      ws.send(JSON.stringify(messageObj));
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

  const renderItem = ({ item }: { item: MessageType }) => {
    const messageStyle =
      item.senderId === userId
        ? style.outgoing_message
        : style.incoming_message;
    return (
      <View style={messageStyle} key={item.messageId}>
        <Account
          name="account-circle-outline"
          size={34}
          color={"#E2D7C6"}
          style={{ marginLeft: 20, marginRight: 8, marginVertical: 10 }}
        />
        <View style={style.message_content}>
          <Text>{item.message}</Text>
        </View>
        <View style={{}}>
          <Text>{item.timestamp}</Text>
        </View>
      </View>
    );
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
      <TouchableWithoutFeedback>
        <FlatList
          data={messageArr}
          renderItem={renderItem}
          keyExtractor={(item) => item.messageId}
        />
        {/* </ScrollView> */}
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
