import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = (props) => {
  const click = () => {
    alert("Você clicou");
  };
  return (
    <TouchableOpacity onPress={click} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 330,
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
