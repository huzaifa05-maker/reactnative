import { View, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { globalStyles } from '@/styles/globalstyles';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Count: {count}</Text>

      <View style={globalStyles.buttonContainer}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>

      <View style={globalStyles.buttonContainer}>
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>

      <View style={globalStyles.buttonContainer}>
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

      <View style={globalStyles.toggleButton}>
        <Button 
          title={isActive ? "TRUE" : "FALSE"} 
          onPress={() => setIsActive(!isActive)} 
          color={isActive ? "green" : "red"} 
        />
      </View>
    </View>
  );
};

export default Counter;
