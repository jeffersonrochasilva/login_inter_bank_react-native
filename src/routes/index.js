import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screms
import Login from "../views/Login";
import Acounts from "../views/Acounts";
import Home from "../views/Home";
import Loading from "../views/Loading";
import CardScreen from "../views/CardScreen";
import Invest from "../views/Invest";
import Pix from "../views/Pix";
const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Invest"
          component={Invest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pix"
          component={Pix}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Acounts"
          component={Acounts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardScreen"
          component={CardScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
