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
      {data.map((item, i) => {
        return (
          <SportsListItem
            key={i}
            title={item.title}
            subtitle={item.details}
            onPress={() => {
              console.log("sports list item pressed");
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

export default SportsList;
