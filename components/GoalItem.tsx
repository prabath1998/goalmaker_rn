import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function GoalItem(this: any, props: any) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#cccccc'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
        >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,    
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  pressedItem:{
    opacity:0.5,
  }
});

export default GoalItem;
