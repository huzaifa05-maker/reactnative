import { View, Button } from 'react-native'
import React from 'react'

type SuccessButtonProps = {
  title: string;
};

const SuccessButton = (props: SuccessButtonProps) => {
  return (
    <View>
      <Button 
        title={props.title}
        onPress={() => console.log("Pressed")}
      />
    </View>
  )
}

export default SuccessButton
