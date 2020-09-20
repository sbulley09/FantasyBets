import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SportsList from "../sports-screens/SportsList";

const Stack = createStackNavigator();

const SportsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sports" component={SportsList} />
    </Stack.Navigator>
  );
};

export default SportsScreen;
