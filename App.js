// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import StackHome from "./componet/StackHome";
import StackMenu from "./componet/StackMenu";
import StackReturn from "./componet/StackReturn";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "tabMenu") {
              return (
                <Ionicons
                  name={focused ? "ios-menu" : "ios-menu-outline"}
                  size={32}
                  color={color}
                />
              );
            } else if (route.name === "tabHome") {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={color}
                />
              );
            } else if (route.name === "tabReturn") {
              return (
                <Fontisto name="arrow-return-left" size={24} color={color} />
              );
            }
          },
          headerShown: false,
          tabBarStyle: { backgroundColor: "#1BA9FF" },
          tabBarInactiveTintColor: "#000",
          tabBarActiveTintColor: "#fff",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="tabMenu" component={StackMenu} />
        <Tab.Screen name="tabHome" component={StackHome} />
        <Tab.Screen name="tabReturn" component={StackReturn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
