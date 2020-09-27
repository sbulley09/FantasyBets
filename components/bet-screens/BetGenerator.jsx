import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button, CheckBox } from "react-native-elements";

const BetGenerator = ({ isOpen }) => {
  const [modalVisible, setModalVisible] = useState(isOpen);
  const [value, onChangeText] = useState("Placeholder");
  const [moneyLineChecked, setMoneyLineChecked] = useState(false);
  const [totalChecked, setTotalChecked] = useState(false);
  const [goalLineChecked, setGoalLineChecked] = useState(false);

  return (
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
  );
}


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
    width: "100%"
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

export default BetGenerator;