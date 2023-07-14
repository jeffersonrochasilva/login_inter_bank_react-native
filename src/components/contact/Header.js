import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <AntDesign name="left" size={24} color="#E6750B" />
      </TouchableOpacity>
      <Text style={styles.text}>Contato</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={props.function} style={styles.button}>
          <AntDesign name="questioncircleo" size={24} color="#E6750B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
  },
});

export default Header;
