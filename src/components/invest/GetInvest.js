import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Icons
import { AntDesign } from "@expo/vector-icons";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <AntDesign name="menuunfold" size={24} color="#E6750B" />
        <View style={styles.box}>
          <Text style={styles.title}>
            Trazer meus investimentos para o inter
          </Text>
        </View>
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
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    marginLeft: 5,
  },
});

export default Profile;
