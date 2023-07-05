import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Pay = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {props.title === "Pagar" ? (
          <MaterialIcons name="attach-money" size={24} color="#E6750B" />
        ) : (
          <AntDesign name="bars" size={24} color="#E6750B" />
        )}
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <AntDesign name="right" size={24} color="#E6750B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
    padding: 20,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});
export default Pay;
