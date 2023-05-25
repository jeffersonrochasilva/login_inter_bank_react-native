import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// components
import Title from "./src/components/commom/Title";
import Button from "./src/components/commom/Button";
import UserInfo from "./src/components/UserInfo";
import ForgotPassword from "./src/components/ForgotPassword";
import Input from "./src/components/commom/Input";
import Icon from "./src/components/commom/Icon";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon />
        <Title />
      </View>

      <View style={styles.content}>
        <UserInfo />
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
