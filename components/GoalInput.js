import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalTxt, setEnteredGoalTxt] = useState("");
  function goalInputHandler(enteredTxt) {
    setEnteredGoalTxt(enteredTxt);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalTxt);
    setEnteredGoalTxt("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course Goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalTxt}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
    borderRadius: 7,
    width: "70%",
  },
});

export default GoalInput;
