import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData,deleteGoalHandler }) {
  
  return (
    <Pressable onPress={deleteGoalHandler.bind(this,itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalTxt}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "firebrick",
    padding: 10,
  },
  goalTxt: {
    color: "white",
  },
});

export default GoalItem;
