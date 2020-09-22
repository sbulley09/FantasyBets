import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { sportsUrl } from "../../utils/constants";
import SportsListItem from "./SportsListItem";

const SportsList = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(sportsUrl)
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch(() => setData([]));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data.map((item, i) => (
        <SportsListItem
          key={i}
          title={item.title}
          subtitle={item.details}
          sport={item.key}
          onPress={() => {
            navigation.navigate("MatchList", {
              sport: item.key,
            });
          }}
        />
      ))}
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

export default SportsList;
