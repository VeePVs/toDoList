import { View, Text, Pressable } from 'react-native';
import React from 'react';

const AddTaskButton = ({onPress}) => {
  return (
        <Pressable style={{width:50, height:50, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center'}} onPress={onPress}>
            <Text style={{color: '#000', fontSize: 32}}>+</Text>
        </Pressable>
    )
}

export default AddTaskButton;
