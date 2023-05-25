import * as React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/commom/Header";
import Button from "../components/commom/Button";
import UserInfo from "../components/UserInfo";

function Home({ navigation }) {
  function goTo() {
    navigation.navigate("Acount");
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <UserInfo function={goTo} />
      </View>
      <View style={styles.button}>
        <Button title="Entrar comoutra conta" />
        <Button title="Abrir conta completa e gratuita" />
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

export default Home;
