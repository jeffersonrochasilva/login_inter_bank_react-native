import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Flags = () => {
  return (
    <View style={styles.container}>
      <View style={styles.brasil}>
        <Image
          style={styles.imgA}
          source={require("../../../assets/brasil.webp")}
        />
      </View>
      <View style={styles.use}>
        <Image
          style={styles.imgA}
          source={require("../../../assets/image.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 50,
    marginRight: 50,
    height: 23,
    flexDirection: "row",
    padding: 3,
  },
  brasil: {
    backgroundColor: "#cdcdcd",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 15,
  },
  use: {
    backgroundColor: "#fff",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgA: {
    width: 18,
    height: 10,
  },
});

export default Flags;
