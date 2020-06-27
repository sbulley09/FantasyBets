import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SportList from "./components/sports-list/SportList";
import { Header } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "FANTASY BETS",
          style: { fontSize: 20, color: "#fff" },
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <SportList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
