import * as React from "react";
import { View, StyleSheet } from "react-native";

import Title from "../components/commom/Title";
import Button from "../components/commom/Button";
import UserInfo from "../components/UserInfo";
import ForgotPassword from "../components/ForgotPassword";
import Input from "../components/commom/Input";
import Icon from "../components/commom/Icon";
import Footer from "../components/Footer";

function Home({ navigation }) {
  function goTo() {
    navigation.navigate("Acounts");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon />
        <Title />
      </View>
      <View style={styles.content}>
        <UserInfo function={goTo} />
        <Input />
        <Button />
        <ForgotPassword />
      </View>
      <Footer />
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
  },
  header: { width: "100%" },
  content: {},
});

export default Home;
