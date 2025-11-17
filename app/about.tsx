// app/about.tsx
import SuccessButton from '@/components/SuccessButton';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View >
      <Text >About Page</Text>
      <SuccessButton title="About page"/>
    </View>
  );
}
