import * as React from "react";
import { StyleSheet, View } from "react-native";
import SportList from "../sports-list/SportList";

export default function BetScreen() {
  return (
    <View style={styles.container}>
      <SportList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
