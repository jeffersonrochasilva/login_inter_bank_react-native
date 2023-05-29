import React, { useState } from "react";
import Modal from "react-native-modal";
import Button from "./Button";
import AlertModal from "../modalComponent/AlertModal";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import ListModal from "../ListModal";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height - 20;
function ModalComponent(props) {
  const [data, setData] = useState([
    {
      title: "Precisa continuar a abertura da conta?",
      text: "Vá em Abrir conta gratuita e siga os proximos passos.",
      id: 1,
    },
    {
      title: "Confira se sua conexão com a internet está ok",
      text: "",
      id: 2,
    },
    {
      title:
        "Verifique se a data e a hora do seu aparelho está com a data e o fuso horario de brasilia",
      text: "Vá às configurações do seu aparelho.",
      id: 3,
    },
  ]);
  const [params, setParams] = useState([
    {
      text: "Selecione Gerenciamento geral ou Configurções adicionais.",
      id: 1,
    },
    {
      text: "Data e hora e verifique se a opção Data e hora automásticas está ativada.",
      id: 2,
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.note}></View>
      <View style={styles.content}>
        <Text style={styles.title}>Problemas com login ?</Text>
      </View>
      <ListModal data={data} />
      <View>
        <Text style={styles.text}>
          Selecione Gerenciamento geral ou Configurções adicionais.
        </Text>
        <Text style={styles.text}>
          Data e hora e verifique se a opção Data e hora automásticas está
          ativada.
        </Text>
      </View>
      <AlertModal />

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
        <Text style={styles.subTitle}>Versão do app: 11.5.3</Text>
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
  title: {
    fontWeight: "bold",
    marginBottom: 50,
    fontSize: 18,
  },
  subTitle: {
    fontWeight: "bold",
    marginBottom: 40,
    fontSize: 13,
  },
  note: {
    width: 50,
    height: 10,
    backgroundColor: "#ececee",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  content: {},
  footer: {
    height: 170,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#cdcdcd",
    marginLeft: 21,
    marginBottom: 20,
    marginRight: 20,
  },
});

export default ModalComponent;
