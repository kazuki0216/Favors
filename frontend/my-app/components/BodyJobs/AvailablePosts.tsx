import React from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import ModalView from "./Modal";
import { PostBody } from "../../types/post";
import { dummyData } from "../DummyData";
import NavigationContext from "../../context/NavigationContext";
import AppContext from "../../context/Context";
import BookMark from "react-native-vector-icons/FontAwesome";

const AvailablePosts = ({}) => {
  const value = useContext(AppContext);
  const { myPostFeed, setMyPostFeed, selectedPost, setSelectedPost } = value;
  const navigation = useContext(NavigationContext);
  const { messageNavigation } = navigation;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [publicPostFeed, setpublicPostFeed] = useState<PostBody[] | []>(
    dummyData
  );

  const renderPosts = publicPostFeed.map((feed, index) => {
    const descriptionLength = () => {
      if (feed.description.length > 70) {
        return (
          <Text style={styles.card_text}>
            {`${feed.description.substring(0, 50)}...`}
          </Text>
        );
      } else {
        return <Text style={styles.card_text}>{feed.description}</Text>;
      }
    };
    return (
      <Pressable
        onPress={() => {
          setSelectedPost(publicPostFeed[index]);
          setModalVisible(true);
        }}
        key={index}
      >
        <View style={styles.card_styling}>
          <View style={styles.card_header}>
            <Icon3 name="account-circle-outline" size={40} />
            <Text style={styles.text}>{feed.title}</Text>
          </View>
          <View style={styles.card_body}>{descriptionLength()}</View>
          <View style={styles.card_footer}>
            <View>
              <View style={styles.location}>
                <View style={styles.location}>
                  <Icon name="location-sharp" size={19} color="#004831" />
                  <Text style={styles.footer_text}> {feed.location}</Text>
                </View>
                <Text>￥{feed.price}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  //make the bookmark change to true
                  const bookmark = true;
                  const updatedFeed = { ...feed, bookmark };
                  setpublicPostFeed((prev) => [
                    ...prev,
                    (publicPostFeed[index] = updatedFeed),
                  ]);
                }}
              >
                {!feed.bookmarked ? (
                  <BookMark name="bookmark-o" size={25} />
                ) : (
                  <BookMark name="bookmark" size={25} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    );
  });

  return (
    <>
      <View style={styles.container}>{renderPosts}</View>
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
      />
    </>
  );
};

export default AvailablePosts;

const styles = StyleSheet.create({
  card_section: {
    borderWidth: 0.3,
    flex: 0.95,
    width: 350,
    backgroundColor: "#004832",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    maxHeight: 600,
    padding: 10,
  },
  container: {
    alignItems: "center",
  },
  card_styling: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: 300,
    height: 200,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 40,
  },
  card_header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: 300,
    marginLeft: 10,
    marginTop: 5,
  },
  card_body: {
    marginHorizontal: 25,
  },
  card_text: {
    marginTop: 20,
    fontWeight: "300",
  },
  card_footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 25,
    alignItems: "center",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contact_text: {
    marginRight: 5,
    fontSize: 12,
  },
  footer_text: {
    fontWeight: "600",
  },
  text: {
    fontWeight: "bold",
    color: "#004831",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 20,
  },
  view_button: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  view_button_text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#E2D7C6",
  },
});
