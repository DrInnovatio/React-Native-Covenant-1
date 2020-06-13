import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === {count: number}
  // action === { type: 'increment' || 'decrement', payload: 15 }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <View>
      <Button
        title="Increase"
        onPress={ () => {
          // Don't do this
          // counter++;
          dispatch({ type: 'increment', payload: 1 })
        } }
      />

      <Button
        title="Decrease"
        onPress={ () => {
          dispatch({ type: 'decrement', payload: 1 })
        } }
      />

      <Text>Current Count: { state.count }</Text>

    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;