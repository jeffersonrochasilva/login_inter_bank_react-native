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
  const [data] = useState([
    { icons: "creditcard", text: "Cartões", function: goToCardScreen },
    { icons: "barschart", text: "Invest", function: goToInvest },
    { icons: "areachart", text: "Pix", function: goToPix },
    { icons: "home", text: "Contato", function: goToCardScreen },
    { icons: "phone", text: "Contato", function: goToCardScreen },
    { icons: "setting", text: "configuração", function: goToCardScreen },
  ]);
  function goto() {
    navigation.navigate("Login");
  }
  function goToPix() {
    navigation.navigate("Pix");
  }
  function goToCardScreen() {
    navigation.navigate("CardScreen");
  }
  function goToInvest() {
    navigation.navigate("Invest");
  }
  function setValueStep() {
    setStepModalFgts(!stepModalFgts);
  }
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderHome />
          <AcountBalance />
          <Text style={styles.text}>Ver extrato</Text>
          <View style={styles.content}>
            {data.map((item, index) => (
              <Card
                key={index}
                icons={item.icons}
                text={item.text}
                function={item.function}
              />
            ))}
          </View>
          <TouchableOpacity onPress={setValueStep}>
            <AntDesign
              style={{ textAlign: "center" }}
              name="down"
              size={30}
              color="#E6750B"
            />
          </TouchableOpacity>
          {stepModalFgts && (
            <View>
              <TouchableOpacity onPress={setValueStep}>
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
