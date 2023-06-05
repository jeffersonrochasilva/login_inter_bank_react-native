import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Loading = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 3,
            borderColor: "red",
            // borderLeftColor: "red",
            borderTopColor: "#fff",
            borderRadius: 100,
            width: 30,
            height: 30,
          }}
        ></View>
        <Text style={{ color: "red" }}>Loading</Text>
      </View>
    </SafeAreaView>
  );
};
export default Loading;
