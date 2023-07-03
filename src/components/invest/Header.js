import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// Icon
import { AntDesign } from "@expo/vector-icons";
const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.function}>
        <AntDesign name="left" size={24} color="#E6750B" />
      </TouchableOpacity>
      <Text style={styles.text}>Inter Invest</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={props.function} style={styles.button}>
          <AntDesign name="search1" size={24} color="#E6750B" />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.function} style={styles.button}>
          <AntDesign name="setting" size={24} color="#E6750B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 20,
  },
});

export default Header;
