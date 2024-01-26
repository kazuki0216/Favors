import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import ControlBar from "../components/ControlBar";
import { StatusBar } from "expo-status-bar";
import AppContext from "../context/Context";
import ModalView from "../components/BodyJobs/Modal";
import Icon from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

const BookMark: React.FC = () => {
  const value = useContext(AppContext);
  const {
    myPostFeed,
    setMyPostFeed,
    selectedPost,
    setSelectedPost,
    bookmarkedJob,
    setBookMarkedJob,
  } = value;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const renderPosts = bookmarkedJob.map((feed: any, index: any) => {
    if (!feed.status) {
      return (
        <Pressable
          onPress={() => {
            setSelectedPost(myPostFeed[index]);
            setModalVisible(true);
          }}
          key={index}
        >
          <View style={styles.card_styling}>
            <View style={styles.card_header}>
              {/* <Image source={require("../../assets/icons/profile1.png")}/> */}
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.text}>{feed.title}</Text>
            </View>
            <View style={styles.card_body}>
              <Text style={styles.card_text}>{`${feed.description.substring(
                0,
                120
              )}...`}</Text>
            </View>
            <View style={styles.card_footer}>
              <View style={styles.location}>
                <Icon name="location-sharp" size={19} color="#004831" />
                <Text style={styles.footer_text}> {feed.location}</Text>
              </View>
              <View>
                <Text>￥{feed.price}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      );
    }
  });

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.card_container}>{renderPosts}</View>
        <ModalView
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
        <ControlBar />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    margin: 0,
    padding: 0,
  },
  texts: {
    color: "white",
    fontWeight: "bold",
  },
  card_container: {
    flex: 1,
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
    marginBottom: 10,
  },
  card_text: {
    marginTop: 20,
    fontWeight: "300",
  },
  card_footer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    alignItems: "center",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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

export default BookMark;
