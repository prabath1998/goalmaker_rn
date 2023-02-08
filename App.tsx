import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, FlatList,StatusBar} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [courseGoals, setCourseGoals] = useState([] as any[]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText: any) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: any) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <>
    <StatusBar backgroundColor='#000000' barStyle='light-content'></StatusBar>
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="red"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
        visible={modalVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 4,
  },
  buttonContainer: {
    padding: 2,
  },
});

export default App;
