import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mais ações</Text>
      <View style={styles.box}>
        <View>
          <View style={styles.icon}>
            <MaterialIcons name="vpn-key" size={24} color="#E6750B" />
          </View>
          <Text style={styles.description}>Minhas</Text>
          <Text style={styles.description}>chaves</Text>
        </View>
        <View>
          <View style={styles.icon}>
            <FontAwesome5 name="file-image" size={24} color="#E6750B" />
          </View>
          <Text style={styles.description}>Extrato e</Text>
          <Text style={styles.description}>devoluções</Text>
        </View>
        <View>
          <View style={styles.icon}>
            <AntDesign name="bars" size={24} color="#E6750B" />
          </View>
          <Text style={styles.description}>Meus</Text>
          <Text style={styles.description}>limites</Text>
        </View>
        <View>
          <View style={styles.icon}>
            <AntDesign name="hearto" size={24} color="#E6750B" />
          </View>
          <Text style={styles.description}>Meus</Text>
          <Text style={styles.description}>favoritos</Text>
        </View>
        <View>
          <View style={styles.icon}>
            <Entypo name="hand" size={24} color="#E6750B" />
          </View>
          <Text style={styles.description}>Pix Saque e</Text>
          <Text style={styles.description}>pix Troco</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  text: {
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(248, 221, 195)",
    borderRadius: 100,
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Options;
