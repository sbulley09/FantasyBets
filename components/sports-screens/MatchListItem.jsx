import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const MatchListItem = (props) => {
  const { title, subtitle, onPress } = props;

  return (
    <ListItem
      title={title}
      subtitle={
        <View style={{ flexDirection: "row" }}>
          <Text>{subtitle}</Text>
        </View>
      }
      bottomDivider
      chevron
      titleStyle={{ fontSize: 18 }}
      onPress={onPress}
    />
  );
};

export default MatchListItem;
