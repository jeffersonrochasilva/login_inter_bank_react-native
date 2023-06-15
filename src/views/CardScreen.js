import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

// Components
import Header from "../components/cardScreen/Header";
import Button from "../components/commom/Button";
const CardScreen = ({ navigation }) => {
  const height = Dimensions.get("window").height;
  function goTo() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={(styles.container, { height: height })}>
          <Header onPress={goTo} />
          <Image
            source={require("../../assets/cartao-inter.png")}
            style={{ width: "100%", height: 300 }}
          />
          <Text style={styles.title}>
            Contrato de utilização do cartão Inter Mastercaard
          </Text>
          <View style={styles.boxText}>
            <Text style={styles.text}>
              Leia e aceite o contrato atualizado para aproveitar todas as
              vantagens do seu cartão Inter Mastercard.
            </Text>
          </View>

          <View style={styles.buttonGo}>
            <Button
              title="Continuar"
              background="#E6750B"
              function={goTo}
              color="white"
              aling="center"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "red",
  },
  // button: {
  //   width: 100,
  //   height: 45,
  //   backgroundColor: "red",
  // },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#303030",
    textAlign: "center",
  },
  boxText: {
    marginHorizontal: 10,
  },
  text: {
    color: "#303030",
    textAlign: "center",
    color: "#c3c3c3",
  },
  buttonGo: {
    marginHorizontal: 10,
    position: "absolute",
    bottom: 30,
  },
});

export default CardScreen;
