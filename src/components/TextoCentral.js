import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TextCentral = (props) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.corFundo || "#000",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: props.corTexto || "#FFF",
        }}
      >
        {props.children}
      </Text>
    </View>
  );
};

export default TextCentral;
