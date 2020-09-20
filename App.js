import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "react-native-elements";

import HomeScreen from "./components/main-screens/Home";
import ProfileScreen from "./components/main-screens/Profile";
import SportsScreen from "./components/main-screens/Sports";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "FANTASY BETS",
          style: { fontSize: 20, color: "#fff" },
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <Tab.Navigator>
        <Tab.Screen name="Sports" component={SportsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
