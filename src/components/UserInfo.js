import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const UserInfo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.subContainer}>
          <View style={styles.init}>
            <Text style={styles.p}>JR</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Jefferson Rocha</Text>
            <Text style={styles.cpf}>***.233.445-**</Text>
          </View>
        </View>
        <TouchableOpacity onPress={props.function}>
          <Text style={styles.text}>Trocar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderWidth: 1,
    borderColor: "#cdcdcd",
    width: 300,
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 4,
    padding: 15,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 10,
  },
  init: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "rgb(109, 108, 108)",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#cdcdcd",
  },
  cpf: {
    fontWeight: "700",
  },
  text: {
    color: "#E6750B",
    fontWeight: "bold",
  },
  p: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default UserInfo;
