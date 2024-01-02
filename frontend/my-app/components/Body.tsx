import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AvailablePosts from "./BodyJobs/AvailablePosts";
import MyJobs from "./BodyJobs/MyJobs";
import AppContext from "../context/Context";

const Body = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [homePosts, setHomePosts] = useState<boolean>(true);
  const [myPost, setMyPost] = useState<boolean>(false);

  useEffect(() => {
    handlePress("投稿");
  }, []);

  const handlePress = (button: string) => {
    setSelectedButton(button);
    if (button === "自分") {
      setHomePosts(false);
      setMyPost(true);
    } else {
      setHomePosts(true);
      setMyPost(false);
    }
  };

  const backgroundStyling = homePosts && !myPost ? "#004831" : "#2c5d63";
  return (
    <>
      <View style={styles.view_button}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => handlePress("投稿")}
        >
          <Text
            style={[
              styles.view_button_text,
              selectedButton === "投稿" && { color: "#004831", fontSize: 28 },
            ]}
          >
            投稿
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => handlePress("自分")}
        >
          <Text
            style={[
              styles.view_button_text,
              selectedButton === "自分" && { color: "#004831", fontSize: 28 },
            ]}
          >
            自分
          </Text>
        </TouchableHighlight>
      </View>
      <SafeAreaView style={styles.body}>
        <ScrollView
          style={[styles.card_section, { backgroundColor: backgroundStyling }]}
        >
          {homePosts && !myPost && <AvailablePosts />}
          {!homePosts && myPost && <MyJobs />}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1.25,
    shadowRadius: 5,
    elevation: 5,
    position: "relative",
  },
  view_button: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
  },
  view_button_text: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#E2D7C6",
  },
  card_section: {
    borderWidth: 0.3,
    flex: 0.95,
    width: 350,
    //backgroundColor: "#004832",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    maxHeight: 600,
    padding: 10,
  },
});

export default Body;
