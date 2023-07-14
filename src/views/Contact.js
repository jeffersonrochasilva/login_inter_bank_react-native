import React from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";

// components
import Header from "../components/contact/Header";
import Contacts from "../components/contact/Contact";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text style={styles.text}>Contsct page</Text> */}
      <Contacts />
      <Image style={styles.image} source={require("../../assets/conta.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginHorizontal: 20,
    marginVertical: Platform.OS === "android" ? 20 : 50,
  },
  text: {
    color: "red",
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 8,
  },
});

export default Contact;
