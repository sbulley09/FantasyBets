import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import moment from "moment";

const MatchDetails = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState("Placeholder");
  const [moneyLineChecked, setMoneyLineChecked] = useState(false);
  const [totalChecked, setTotalChecked] = useState(false);
  const [goalLineChecked, setGoalLineChecked] = useState(false);

  const { matchDetails } = route.params;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nick vs. Jake</Text>
            <CheckBox
              title="Money Line Bet"
              checked={moneyLineChecked}
              onPress={() => setMoneyLineChecked(!moneyLineChecked)}
            />
            <CheckBox
              title="Total Bet"
              checked={totalChecked}
              onPress={() => setTotalChecked(!totalChecked)}
            />
            <CheckBox
              title="Goal Line Bet"
              checked={goalLineChecked}
              onPress={() => setGoalLineChecked(!goalLineChecked)}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                width: 100,
              }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              keyboardType="number-pad"
            />

            <View style={{ flexDirection: "row", width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  buttonStyle={{
                    ...styles.openButton,
                    backgroundColor: "gray",
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  title={<Text style={styles.textStyle}>Cancel</Text>}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  buttonStyle={{ ...styles.openButton }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  title={<Text style={styles.textStyle}>Place Bet</Text>}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView style={{ flex: 1, width: "100%" }}>
        <Text style={{ height: 30, alignItems: "center" }}>
          {matchDetails.teams[0]} vs. {matchDetails.teams[1]}
        </Text>
        <Text style={{ height: 30, alignItems: "center" }}>
          {moment
            .unix(matchDetails.commence_time)
            .format("dddd, MMMM Do YYYY, h:mm a")}
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#20232a",
            borderWidth: 1,
          }}
        >
          <Text style={{ flex: 4, height: 25 }}>Money Line:</Text>
          <Text style={{ flex: 2, height: 25 }}>+139</Text>
          <Text style={{ flex: 2, height: 25 }}>+229</Text>
          <Text style={{ flex: 2, height: 25 }}>+205</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#20232a",
            borderWidth: 1,
          }}
        >
          <Text style={{ flex: 4, height: 25 }}>Total:</Text>
          <Text style={{ flex: 3, height: 25 }}>o2, 2.5 -115</Text>
          <Text style={{ flex: 3, height: 25 }}>u2, 2.5 -106</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#20232a",
            borderWidth: 1,
          }}
        >
          <Text style={{ flex: 4, height: 25 }}>Goal Line:</Text>
          <Text style={{ flex: 3, height: 25 }}>0, -0.5 +103</Text>
          <Text style={{ flex: 3, height: 25 }}>0, +0.5 +127</Text>
        </View>
        <Text>{JSON.stringify(matchDetails, null, "\t")}</Text>
      </ScrollView>
      <Button
        buttonStyle={{ ...styles.openButton, backgroundColor: "green" }}
        title="+ Create Bet"
        type="solid"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MatchDetails;
