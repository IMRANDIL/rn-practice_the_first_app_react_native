import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData,deleteGoalHandler }) {
  
  return (
   
      <View style={styles.goalItem}>
         <Pressable android_ripple={{color:'#dddddd'}} onPress={deleteGoalHandler.bind(this,itemData.item.id)}
         style={({pressed})=> pressed && styles.pressedItem}
         >
        <Text style={styles.goalTxt}>{itemData.item.text}</Text>
        </Pressable>

      </View>
   
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "firebrick",
   
  },
  goalTxt: {
    color: "white",
    padding: 10,
  },
  pressedItem:{
    opacity:0.5
  }
});

export default GoalItem;
