import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Icon
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="left" size={24} color="#E6750B" />
      <Text>Cartões</Text>
      <MaterialCommunityIcons
        name="home-import-outline"
        size={24}
        color="#E6750B"
      />
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
