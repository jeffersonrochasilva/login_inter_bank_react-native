import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investir</Text>
      <View style={styles.content}>
        <View>
          <TouchableOpacity style={styles.box}>
            <MaterialIcons name="attach-money" size={24} color="#E6750B" />
          </TouchableOpacity>
          <Text style={styles.text}>Renda fixa</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="barschart" size={24} color="#E6750B" />
          </TouchableOpacity>
          <Text style={styles.text}>invest fácil</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="pause" size={24} color="#E6750B" />
          </TouchableOpacity>
          <Text style={styles.text}>Polpança</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="piechart" size={24} color="#E6750B" />
          </TouchableOpacity>
          <Text style={styles.text}>Ver todos</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    minHeight: 100,
    marginTop: 10,
    paddingVertical: 20,
  },
  title: {
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: "rgb(248, 221, 195)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Options;
