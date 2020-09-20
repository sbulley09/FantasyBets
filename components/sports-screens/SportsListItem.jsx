import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const SportsListItem = (props) => {
  const { title, subtitle, onPress } = props;

  return (
    <ListItem
      title={title}
      subtitle={
        <View style={{ flexDirection: "row" }}>
          <Text>{subtitle}</Text>
        </View>
      }
      leftIcon={<Icon name="pool" type="material" />}
      bottomDivider
      chevron
      titleStyle={{ fontSize: 24 }}
      subtitleStyle={{ fontSize: 14 }}
      onPress={onPress}
    />
  );
};

export default SportsListItem;
