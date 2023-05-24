import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = () => {
  const click = () => {
    alert("Você clicou");
  };
  return (
    <TouchableOpacity onPress={click} style={styles.button}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    color: "#fff",
    backgroundColor: "#E6750B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
});
export default Button;
