import React, { useState } from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        color: colors[currentCourseGoals.length % colors.length],
      },
    ]);

    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="My Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={({ item, index }) => (
          <View
            style={[styles.goalsContainer, { backgroundColor: item.color }]}>
            <Text>• {item.text}</Text></View> // ETO SIR LITERAL NA BULLET KADA GOAL HAHAHA DI KO PO KASI ALAM KUNG PANO MAG <ul></ul> NG HTML SA REACT HAHAHA
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
});
