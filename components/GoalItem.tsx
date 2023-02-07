import { StyleSheet, Text, View } from "react-native";
import React from 'react';

function GoalItem(props: any) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    goalText: {
        color: 'white',
        fontSize: 16,
    },
});

export default GoalItem;