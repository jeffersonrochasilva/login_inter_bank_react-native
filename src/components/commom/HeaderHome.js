import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// components
import Flags from "../Home/Flags";
const HeaderHome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>inter</Text>
        <Flags />
        <View
          style={{
            flexDirection: "row",
            width: 80,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={props.function} style={styles.button}>
            <AntDesign name="search1" size={24} color="#E6750B" />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.function} style={styles.button}>
            <Entypo name="dots-three-vertical" size={24} color="#E6750B" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  content: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#E6750B",
  },
});

export default HeaderHome;
