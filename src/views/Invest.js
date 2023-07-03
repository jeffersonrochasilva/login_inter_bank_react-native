import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Components
import Header from "../components/invest/Header";
import CardDescription from "../components/invest/CardDescription";
import Options from "../components/invest/Options";
const Invest = ({ navigation }) => {
  function goBack() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Header function={goBack} />
      <CardDescription />
      <Options />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default Invest;
