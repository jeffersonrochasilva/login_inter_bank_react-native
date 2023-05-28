import React from "react";
import Modal from "react-native-modal";
import Button from "./Button";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height - 20;
function ModalComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.note}></View>
      <View style={styles.content}>
        <Text>Problemas com login ?</Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Continou com problemas, testart conexão"
          color="#E6750B"
          colorBorder="#E6750B"
          aling="flex-start"
          size={1}
        />
        <Button
          title="Ok, entendi!"
          background="#E6750B"
          color="#fff"
          aling="center"
          function={props.function}
        />
        <Text>Versão do app: 11.5.3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    width: deviceWidth,
    height: deviceHeight,
    bottom: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
  },
  note: {
    width: 50,
    height: 10,
    backgroundColor: "#cdcdcd",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  content: {},
  footer: {
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ModalComponent;
