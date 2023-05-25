import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
const Input = (props) => {
  const [num, setNum] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{props.title}</Text>
        <TextInput
          value={num}
          secureTextEntry={props.password}
          onChangeText={(value) => setNum(value)}
          style={styles.input}
          placeholder={props.placeholder}
          keyboardType={props.type}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={props.function} style={styles.icon}>
          {props.password ? (
            <Entypo name="eye" size={20} color="#E6750B" />
          ) : (
            <Entypo name="eye-with-line" size={20} color="#E6750B" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  content: {
    width: 330,
  },
  text: {
    color: "rgb(109, 108, 108)",
    marginBottom: 7,
  },
  input: {
    height: 45,
    borderRadius: 5,
    backgroundColor: "rgb(240, 238, 238)",
    paddingLeft: 10,
  },
  icon: {
    position: "absolute",
    top: 38,
    right: 10,
  },
});

export default Input;
