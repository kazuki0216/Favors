import React, { Dispatch, useState, SetStateAction } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { PostBody } from "../../types/post";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  selectedPost: PostBody | null;
  setSelectedPost: Dispatch<SetStateAction<PostBody | null>>;
  homeNavigation: () => void;
  messageNavigation: () => void;
}
const ModalView: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  selectedPost,
  setSelectedPost,
  homeNavigation,
  messageNavigation,
}) => {
  if (selectedPost) {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon3 name="account-circle-outline" size={40} />
              <Text style={styles.title}>{selectedPost.title}</Text>
              <Text style={styles.description}>{selectedPost.description}</Text>

              <View style={styles.footer}>
                <View style={styles.location}>
                  <Icon name="location-sharp" size={19} color="#004831" />
                  <Text> {selectedPost.location}</Text>
                </View>
                <Text>￥{selectedPost.price}</Text>
              </View>

              <View style={styles.modal_button}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setSelectedPost(null);
                  }}
                >
                  <Text style={styles.contact_text}>Close Modal</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setSelectedPost(null);
                    messageNavigation();
                  }}
                >
                  <Text style={styles.contact_text}>Contact</Text>
                  <Icon1 name="send" size={15} color="#004831" />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    marginRight: 140,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  description: {
    marginTop: 15,
    fontWeight: "500",
  },
  modal_button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: "#E2D7C6",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  contact_text: {
    marginRight: 5,
    fontSize: 12,
  },
});

export default ModalView;
