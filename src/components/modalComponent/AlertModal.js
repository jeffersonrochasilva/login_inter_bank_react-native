import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const AlertContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AntDesign name="infocirlce" size={15} color="#c3c3c3" />
        <Text style={styles.title}>Caso com problemas</Text>
      </View>
      <Text style={styles.text}>
        Recomendamos Limpar o cachs do app. Para isso{" "}
        <Text style={styles.link}>clique aqui</Text> e selecione a opção{" "}
        <Text style={styles.subText}>Limpar dados</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#ececee",
    width: "90%",
    height: 70,
    padding: 15,
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
  },
  title: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontSize: 11,
    marginLeft: 27,
  },
  link: {
    color: "#E6750B",
  },
  subText: {
    fontWeight: "bold",
  },
});

export default AlertContainer;
