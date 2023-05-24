import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserInfo = () => {
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

        <Text style={styles.text}>Trocar</Text>
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
  },
  info: {
    marginLeft: 10,
  },
  init: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: "#c3c3c3",
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
