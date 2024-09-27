import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import ToDo from '../components/ToDo';
import AddTaskButton from '../components/AddTaskButton';

const ToDoList = ({navigation}) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const tasks = firestore()
      .collection('task')
      .onSnapshot(querySnapshot =>{
      const taskk = [];
      querySnapshot.forEach(documentSnapshot => {
        taskk.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setTask(taskk);
    });

    return () => tasks();
    }, []);


  return (
    <SafeAreaView>
        <FlatList 
          data={task}
          renderItem={(everyTask) => <ToDo title={everyTask.item.title}
                                            key={everyTask.index} 
                                            description={everyTask.item.description}
                                            check={everyTask.item.check}
                                            id={everyTask.item.key}
          />}
        />
        <AddTaskButton onPress={()=>{navigation.navigate('AddTask')}}/>
    </SafeAreaView>
  );
};

export default ToDoList;
