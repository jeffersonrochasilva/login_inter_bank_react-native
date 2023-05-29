import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListModal = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: "#cdcdcd",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
    marginBottom: 20,
    fontSize: 12,
  },
});

export default ListModal;
