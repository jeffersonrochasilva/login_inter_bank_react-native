import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
const CardDescription = () => {
  const [data, setData] = useState("5,24");
  return (
    <View style={styles.container}>
      <View style={styles.toBox}>
        <Text style={styles.value}>R$ {data}</Text>
        <Feather name="eye" size={24} color="#E6750B" />
      </View>
      <Text style={styles.text}>Ver carteira / resgatar</Text>
      <View style={styles.toBox}>
        <View style={styles.containerImage}>
          <Image
            style={styles.imgA}
            source={require("../../../assets/brasil.webp")}
          />
          <Text style={styles.title}>investido no Brasil</Text>
        </View>
        <Text>{data}</Text>
      </View>
      <View style={styles.toBox}>
        <View style={styles.containerImage}>
          <Image
            style={styles.imgA}
            source={require("../../../assets/image.png")}
          />
          <Text style={styles.title}>investido nos EUA</Text>
        </View>
        <Text style={styles.text}>Abrir contas</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    padding: 20,
  },
  toBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  value: {
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 12,
    color: "#303030",
  },
  text: {
    color: "#E6750B",
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgA: {
    width: 18,
    height: 10,
    marginRight: 10,
  },
});
export default CardDescription;
