import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Icons
import { AntDesign } from "@expo/vector-icons";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <AntDesign name="user" size={24} color="#E6750B" />
        <Text style={styles.title}>Qual é o seu perfil</Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="right" size={24} color="#E6750B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
    marginTop: 10,
  },
  title: {},
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Profile;
