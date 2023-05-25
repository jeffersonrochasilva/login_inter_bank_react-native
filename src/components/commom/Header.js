import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="arrowleft" size={24} color="#E6750B" />
        </TouchableOpacity>
        <Text style={styles.text}>Conta</Text>
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  content: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Header;
