import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';



function App() {

  const [enteredGoalText,setEnteredGoalText] = useState({});

function goalInputHandler(enteredText:string) { 
  setEnteredGoalText(enteredText);
  
};

function addGoalHandler() {
  console.log(enteredGoalText);
  
 };

  return <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler} />
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
    <View style={styles.goalsContainer}>
      <Text>List Of Goals</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  }
});

export default App;
