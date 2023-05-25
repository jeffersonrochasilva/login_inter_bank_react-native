import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="lock-open" size={16} color="#E6750B" />
          <Text style={styles.text}>ISafe</Text>
        </View>

        <Text style={styles.text}>Trocar ou abrir conta</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  content: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#E6750B",
    fontWeight: "700",
  },
});
export default Footer;
