import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Components
import Header from "../components/pix/Header";
import Pay from "../components/pix/Pay";
import Options from "../components/pix/Options";

const Pix = ({ navigation }) => {
  function goToHome() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Header onPress={goToHome} />
      <Pay title="Pagar" />
      <Pay title="Receber" />
      <Options />
      <Image style={styles.image} source={require("../../assets/pix.webp")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {},
  image: {
    marginVertical: 20,
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
});

export default Pix;
