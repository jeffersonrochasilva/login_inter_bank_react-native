import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

// Components
import HeaderHome from "../components/commom/HeaderHome";
import AcountBalance from "../components/Home/AcountBalance";
import Card from "../components/commom/Card";

// Icons
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  const [stepModalFgts, setStepModalFgts] = useState(true);
  function goto() {
    navigation.navigate("Login");
  }
  function setValueStep() {
    setStepModalFgts(false);
  }
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderHome />
          <AcountBalance />
          <Text style={styles.text}>Ver extrato</Text>
          <View style={styles.content}>
            <Card icons="creditcard" text="Cartões" />
            <Card icons="barschart" text="Invest" />
            <Card icons="areachart" text="calc" />
            <Card icons="home" text="inicio" />
            <Card icons="phone" text="Contato" />
            <Card icons="setting" text="configuração" />
          </View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="down"
            size={30}
            color="#E6750B"
          />
          {stepModalFgts && (
            <View>
              <TouchableOpacity>
                <AntDesign
                  style={{ textAlign: "right" }}
                  name="close"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <Image
                style={{ width: "100%", height: 180 }}
                source={require("../../assets/fgts.png")}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },
  content: {
    minHeight: 120,
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    marginTop: 20,
    color: "#E6750B",
  },
});

export default Home;
