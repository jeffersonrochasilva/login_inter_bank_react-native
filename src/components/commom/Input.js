import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  content: {
    width: 300,
  },
  text: {
    color: "rgb(109, 108, 108)",
    marginBottom: 7,
  },
  input: {
    height: 45,
    borderRadius: 5,
    backgroundColor: "rgb(240, 238, 238)",
    paddingLeft: 10,
  },
});

export default Input;
