import { Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import React, {useReducer} from 'react';
import styles from '../styles/AddTask';
import firestore from '@react-native-firebase/firestore';
import { reducerAddTask } from '../assets/reducers';

const initialState = {
    title: '',
    description: '',
    check: false,
  };

const AddTask = ({navigation}) => {
    const [state, dispatch] = useReducer(reducerAddTask, initialState);

    async function saveTask() {
        await firestore()
        .collection('task')
        .add({
            title: state.title,
            description: state.description,
            check: false,
        });
    }

  return (
    <SafeAreaView>
        <Text style={styles.title}>¿Qué titulo tendrá tu toDo?</Text>
        <TextInput 
            style={styles.input} 
            placeholderTextColor={"#919191"} 
            placeholder='Ir a la cocina'
            onChangeText={(text) => dispatch({ type: 'SET_TITLE', payload: text })}
            />
        <Text style={styles.description}>Expresa más detalladamente que deseas hacer.</Text>
        <TextInput 
            style={styles.inputDescription}
            placeholderTextColor={"#919191"}
            placeholder='Picar manzanas con una cuchara' 
            numberOfLines={4}
            maxLength={150}
            multiline
            onChangeText={(text) => dispatch({type: 'SET_DESCRIPTION', payload: text})}/>
        <Pressable
            style={styles.saveButton}
            onPress={()=>{
                if (state.title != '' || state.description != '') {
                    saveTask();
                    Alert.alert('Guardado exitoso');
                    navigation.navigate('Home');
                } else{
                    Alert.alert('Tienes campos vacios');
                }
            }}>
            <Text>Guardar</Text>
        </Pressable>
        <Pressable
            style={styles.cancelButton}
            onPress={()=>{
                navigation.navigate('Home');
            }}>
            <Text>Cancelar</Text>
        </Pressable>
    </SafeAreaView>
  );
};

export default AddTask;
