import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
  const click = () => {
    alert("Você clicou");
  };
  return (
    <TouchableOpacity
      onPress={props.function}
      style={{
        width: 330,
        height: 40,
        backgroundColor: props.background,
        justifyContent: "center",
        alignItems: props.aling,
        borderRadius: 5,
        borderWidth: props.size,
        borderColor: props.colorBorder,
        paddingLeft: 20,
      }}
    >
      <Text style={{ color: props.color }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
