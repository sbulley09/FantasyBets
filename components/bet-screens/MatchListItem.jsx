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
          <Text style={{ flex: 4, height: 25 }}>Money Line:</Text>
          <Text style={{ flex: 2, height: 25 }}>+139</Text>
          <Text style={{ flex: 2, height: 25 }}>+229</Text>
          <Text style={{ flex: 2, height: 25 }}>+205</Text>
        </View>
      }
      leftIcon={
        <Icon
          name="rowing"
          type="material"
          onPress={() => {
            console.log("testing");
          }}
        />
      }
      bottomDivider
      chevron
      titleStyle={{ fontSize: 24 }}
      subtitleStyle={{ fontSize: 14 }}
      onPress={onPress}
    />
  );
};

export default MatchListItem;
