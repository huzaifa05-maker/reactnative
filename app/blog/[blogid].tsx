import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const blog = () => {
    const {blogid} = useLocalSearchParams()
  return (
    <View>
      <Text>your blog no is {blogid}</Text>
    </View>
  )
}

export default blog