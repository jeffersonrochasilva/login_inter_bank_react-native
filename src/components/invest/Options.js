import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Options = () => {
  return (
    <View style={styles.container}>
      <Text>hello word</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
  },
});

export default Options;
