import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.icons && (
        <AntDesign name={props.icons} size={24} color="#E6750B" />
      )}
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cdcdcd",
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default Card;
