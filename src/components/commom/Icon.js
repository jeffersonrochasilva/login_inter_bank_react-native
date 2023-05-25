import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Title = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="questioncircleo" size={24} color="#E6750B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
});
export default Title;
