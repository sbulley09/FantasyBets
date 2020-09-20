import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SportsList from "../sports-screens/SportsList";
import MatchList from "../sports-screens/MatchList";
import MatchDetails from "../bet-screens/MatchDetails";

const Stack = createStackNavigator();

const SportsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sports" component={SportsList} />
      <Stack.Screen name={"MatchList"} component={MatchList} />
      <Stack.Screen name={"MatchDetails"} component={MatchDetails} />
    </Stack.Navigator>
  );
};

export default SportsScreen;
