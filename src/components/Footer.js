import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
const Footer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="lock-open" size={16} color="#E6750B" />
          <Text style={styles.text}>ISafe</Text>
        </View>
        <TouchableOpacity onPress={props.function}>
          <Text style={styles.text}>Trocar ou abrir conta</Text>
        </TouchableOpacity>
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
