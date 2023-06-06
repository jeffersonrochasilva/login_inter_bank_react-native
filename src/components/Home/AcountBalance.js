import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// icons
import { Entypo } from "@expo/vector-icons";
// components
import Flags from "../Home/Flags";
const HeaderHome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>R$ 300,22</Text>
        <View
          style={{
            flexDirection: "row",
            width: 80,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={props.function} style={styles.icon}>
            {props.password ? (
              <Entypo name="eye-with-line" size={20} color="#E6750B" />
            ) : (
              <Entypo name="eye" size={20} color="#E6750B" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 20,
  },
  content: {
    width: 190,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    // color: "#E6750B",
  },
});

export default HeaderHome;
