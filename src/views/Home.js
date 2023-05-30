import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text> Home Page</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default Home;
