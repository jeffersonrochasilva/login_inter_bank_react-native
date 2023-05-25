import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>esqueci minha senha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    color: "#E6750B",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default ForgotPassword;
