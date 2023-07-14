import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// icons
import { Entypo } from "@expo/vector-icons";

const Contact = () => {
  const [data, setData] = useState([
    {
      key: "phone",
      value: "(00) 0000-0000",
      icon: "instagram-with-circle",
    },
    {
      key: "email",
      value: "inter@gmeil.com",
      icon: "phone",
    },
    {
      key: "instagram",
      value: "@inter",
      icon: "email",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contatos:</Text>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.items}>
              <Entypo
                style={{ marginRight: 5 }}
                name={item.icon}
                size={20}
                color="#E6750B"
              />
              <Text style={styles.item}>{item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 8,
    minHeight: 120,
    padding: 20,
    borderColor: "#cdcdcd",
    marginBottom: 10,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  item: {
    fontSize: 15,
  },
  items: {
    flexDirection: "row",
  },
});

export default Contact;
