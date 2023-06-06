import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import HeaderHome from "../components/commom/HeaderHome";
import AcountBalance from "../components/Home/AcountBalance";
import Card from "../components/commom/Card";
const Home = ({ navigation }) => {
  function goto() {
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.container}>
        <HeaderHome />
        <AcountBalance />
        <Text style={styles.text}>Ver extrato</Text>
        <View style={styles.content}>
          <Card icons="creditcard" text="Cartões" />
          <Card icons="barschart" text="Invest" />
          <Card icons="areachart" text="calc" />
          <Card icons="home" text="inicio" />
          <Card icons="phone" text="Contato" />
          <Card icons="setting" text="configuração" />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },
  content: {
    // backgroundColor: "#cdcdcd",
    minHeight: "60%",
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    marginTop: 20,
    color: "#E6750B",
  },
});

export default Home;
