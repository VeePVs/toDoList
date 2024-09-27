import { View, Text } from 'react-native';
import React from 'react';
import ToDoList from './src/views/ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTask from './src/views/AddTask';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ToDoList}/>
        <Stack.Screen name='AddTask' component={AddTask}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
