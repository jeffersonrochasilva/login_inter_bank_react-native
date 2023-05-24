import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// components
import Title from "./src/components/commom/Title";
import Button from "./src/components/commom/Button";
import UserInfo from "./src/components/UserInfo";
export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <UserInfo />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
