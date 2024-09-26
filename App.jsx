import { View, Text } from 'react-native';
import React from 'react';
import ToDoList from './src/views/ToDoList';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <ToDoList />
    </SafeAreaView>
  );
};

export default App;
