import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";

// Components
import Header from "../components/cardScreen/Header";

const CardScreen = ({ navigation }) => {
  function goTo() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Text>Tela Cartões</Text>
          <TouchableOpacity style={styles.button} onPress={goTo}>
            <Text>Ir para a home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 45,
    backgroundColor: "red",
  },
});

export default CardScreen;
