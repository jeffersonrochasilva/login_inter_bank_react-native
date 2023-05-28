import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Title = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.function}>
        <AntDesign name="questioncircleo" size={20} color="#E6750B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 12,
  },
});
export default Title;
