import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// Icon
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <AntDesign name="left" size={24} color="#E6750B" />
      </TouchableOpacity>
      <Text>Cartões</Text>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialCommunityIcons
          name="home-import-outline"
          size={24}
          color="#E6750B"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default Header;
