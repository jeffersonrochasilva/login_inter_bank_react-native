import * as React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/commom/Header";
import Button from "../components/commom/Button";
import UserInfo from "../components/UserInfo";

function Acounts({ navigation }) {
  function goTo() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Header function={goTo} />
      <View style={styles.content}>
        <UserInfo
          function={goTo}
          cpf="***.115.558-**"
          init="JS"
          name="Jefferson Rocha"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Entrar comoutra conta"
          color="#E6750B"
          colorBorder="#E6750B"
          aling="flex-start"
          size={1}
        />
        <Button
          title="Abrir conta completa e gratuita"
          background="#E6750B"
          color="#fff"
          aling="flex-start"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  header: { width: "100%" },
  content: {},
  button: {
    height: 95,
    justifyContent: "space-between",
  },
});

export default Acounts;
