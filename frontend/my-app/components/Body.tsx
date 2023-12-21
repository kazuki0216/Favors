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
  Modal,
} from "react-native";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import AvailablePosts from "./BodyJobs/AvailablePosts";
import MyJobs from "./BodyJobs/MyJobs";
import ModalView from "./BodyJobs/Modal";

interface Props {
  homeNavigation: () => void;
  messageNavigation: () => void;
}

const Body: React.FC<Props> = ({ homeNavigation, messageNavigation }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [homePosts, setHomePosts] = useState<boolean>(true);
  const [myPost, setMyPost] = useState<boolean>(false);

  useEffect(() => {
    handlePress("投稿")
  },[])

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
      {homePosts && !myPost && (
        <AvailablePosts
          homeNavigation={homeNavigation}
          messageNavigation={messageNavigation}
        />
      )}
      {!homePosts && myPost && <MyJobs />}
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default Body;
