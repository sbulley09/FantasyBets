import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MatchList from "../bet-screens/MatchList";
import MatchDetails from "../bet-screens/MatchDetails";

const Stack = createStackNavigator();

export default function BetScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Matches"} component={MatchList} />
      <Stack.Screen
        name={"MatchDetails"}
        component={MatchDetails}
        options={{ headerTitle: "Match Details" }}
      />
    </Stack.Navigator>
  );
}
