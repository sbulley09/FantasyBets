import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import MatchListItem from "./MatchListItem";

const data = [
  {
    id: "1",
    title: "Stephen vs. Jun",
  },
  {
    id: "2",
    title: "Nick vs. Jake",
  },
  {
    id: "3",
    title: "Jake vs. Carson",
  },
  {
    id: "4",
    title: "Nick vs. Stephen",
  },
  {
    id: "5",
    title: "Jun vs. Jake",
  },
  {
    id: "6",
    title: "Stephen vs. Jake",
  },
  {
    id: "7",
    title: "Carson vs. Nick",
  },
  {
    id: "8",
    title: "Jun vs. Nick",
  },
  {
    id: "9",
    title: "Stephen vs. Carson",
  },
  {
    id: "10",
    title: "Carson vs. Jun",
  },
  {
    id: "11",
    title: "Eliz vs. Nick",
  },
  {
    id: "12",
    title: "Eliz vs. Carson",
  },
  {
    id: "13",
    title: "Eliz vs. Jake",
  },
  {
    id: "14",
    title: "Eliz vs. Stephen",
  },
  {
    id: "15",
    title: "Eliz vs. Jun",
  },
];

const SportList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, i) => {
        return (
          <MatchListItem
            key={i}
            title={item.title}
            subtitle={"Head to Head Odds"}
            onPress={() => {
              navigation.navigate("MatchDetails");
            }}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 32,
  },
});

export default SportList;
