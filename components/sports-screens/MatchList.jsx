import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { getOddsUrl } from "../../utils/constants";
import MatchListItem from "./MatchListItem";

const MatchList = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const { sport } = route.params;
    console.log(sport);
    fetch(getOddsUrl(sport))
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch(() => setData([]));
  }, []);

  console.log(data);
  return (
    <ScrollView style={styles.container}>
      {data.map((item, i) => {
        console.log(item);
        return (
          <MatchListItem
            key={item.home_team}
            title={`${item.teams[0]} vs. ${item.teams[1]}`}
            onPress={() => {
              navigation.navigate(
                "MatchDetails",
                {
                  matchDetails: item,
                }
              );
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

export default MatchList;
