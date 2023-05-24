import React from "react";
import { Text, View, StyleSheet } from "react-native";
const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>inter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#E6750B",
    fontSize: 42,
    fontWeight: "700",
  },
});
export default Title;
