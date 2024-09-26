import { View, Text } from 'react-native'
import React from 'react'

const ToDo = ({title, description, check}) => {
  return (
    <View>
        <Text>{check}</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
    </View>
  )
}

export default ToDo