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
const Home = ({ navigation }) => {
  function goto() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={{ paddingTop: 20 }}>
      <View style={styles.container}>
        <HeaderHome />
        <AcountBalance />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});

export default Home;
