import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Title from "../components/commom/Title";
import Button from "../components/commom/Button";
import UserInfo from "../components/UserInfo";
import ForgotPassword from "../components/ForgotPassword";
import Input from "../components/commom/Input";
import Icon from "../components/commom/Icon";
import Footer from "../components/Footer";
import ModalComponent from "../components/commom/ModalComponent";

function Home({ navigation }) {
  const [password, setPassword] = useState(true);
  const [stateModal, setStateModal] = useState(false);
  function goTo() {
    navigation.navigate("Acounts");
  }
  function setStatePassword() {
    setPassword(!password);
  }
  function setValueStateModal() {
    setStateModal(!stateModal);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon function={setValueStateModal} />
        <Title />
      </View>
      <View style={styles.content}>
        <UserInfo
          function={goTo}
          cpf="***.115.558-**"
          init="JS"
          name="Jefferson Rocha"
        />
        <Input
          placeholder="Digite sua senha"
          title="Senha"
          password={password}
          function={setStatePassword}
        />
        <Button
          title="Entrar"
          background="#E6750B"
          color="#fff"
          aling="center"
        />
        <ForgotPassword />
      </View>
      <Footer function={goTo} />
      {stateModal ? (
        <ModalComponent
          coverScreen={true}
          step={stateModal}
          function={setValueStateModal}
        />
      ) : (
        false
      )}
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
