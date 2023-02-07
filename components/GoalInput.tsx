import {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';

function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText: any) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
