import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState([]);

  function addGoalHandler(enteredGoalTxt) {
    setGoal((currentGoal) => [
      ...currentGoal,
      {
        text: enteredGoalTxt,
        id: Math.random().toString(),
      },
    ]);
  }


  function deleteGoalHandler(id){
   setGoal(currentGoal=>{
    return currentGoal.filter((goal)=>goal.id !== id)
   })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={goal}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} deleteGoalHandler={deleteGoalHandler}  />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 5,
  },
});
