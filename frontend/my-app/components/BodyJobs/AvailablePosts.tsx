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
} from "react-native";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome";

const AvailablePosts = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.card_section}>
          <View style={styles.container}>
            <View style={styles.card_styling}>
              <View style={styles.card_header}>
                <Icon3 name="account-circle-outline" size={40} />
                <Text style={styles.text}>コーヒーのデリバリー</Text>
              </View>
              <View style={styles.card_body}>
                <Text style={styles.card_text}>
                  Starbucks元町・中華街店舗でアイスのホワイトモカVentiサイズのピックアップをお願いいたします。
                </Text>
              </View>
              <View style={styles.card_footer}>
                <View style={styles.location}>
                  <Icon name="location-sharp" size={19} color="#004831" />
                  <Text style={styles.footer_text}> 慶應義塾大学</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contact_text}>Contact</Text>
                  <Icon1 name="send" size={15} color="#004831" />
                </View>
              </View>
            </View>
            <View style={styles.card_styling}>
              <View style={styles.card_header}>
                <Icon3 name="account-circle-outline" size={40} />
                <Text style={styles.text}>経済学Iの出席</Text>
              </View>
              <View style={styles.card_body}>
                <Text style={styles.card_text}>
                  木曜日２限目・鈴木教授の授業で出席のカードを押して、授業後に提出する感想用紙の提出をお願いします。
                </Text>
              </View>
              <View style={styles.card_footer}>
                <View style={styles.location}>
                  <Icon name="location-sharp" size={19} color="#004831" />
                  <Text style={styles.footer_text}> 早稲田大学</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contact_text}>Contact</Text>
                  <Icon1 name="send" size={15} color="#004831" />
                </View>
              </View>
            </View>
            <View style={styles.card_styling}>
              <View style={styles.card_header}>
                <Icon3 name="account-circle-outline" size={40} />
                <Text style={styles.text}>誕生日のサプライズ</Text>
              </View>
              <View style={styles.card_body}>
                <Text style={styles.card_text}>
                  Starbucks元町・中華街店舗でアイスのホワイトモカVentiサイズのピックアップをお願いいたします。
                </Text>
              </View>
              <View style={styles.card_footer}>
                <View style={styles.location}>
                  <Icon name="location-sharp" size={19} color="#004831" />
                  <Text style={styles.footer_text}> 慶應義塾大学</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contact_text}>Contact</Text>
                  <Icon1 name="send" size={15} color="#004831" />
                </View>
              </View>
            </View>
            <View style={styles.card_styling}>
              <View style={styles.card_header}>
                <Icon3 name="account-circle-outline" size={40} />
                <Text style={styles.text}>コーヒーのデリバリー</Text>
              </View>
              <View style={styles.card_body}>
                <Text style={styles.card_text}>
                  Starbucks元町・中華街店舗でアイスのホワイトモカVentiサイズのピックアップをお願いいたします。
                </Text>
              </View>
              <View style={styles.card_footer}>
                <View style={styles.location}>
                  <Icon name="location-sharp" size={19} color="#004831" />
                  <Text style={styles.footer_text}> 慶應義塾大学</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contact_text}>Contact</Text>
                  <Icon1 name="send" size={15} color="#004831" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AvailablePosts;

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
  },
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
    marginLeft: 10
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
    marginTop: 45,
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
    marginLeft: 20
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
