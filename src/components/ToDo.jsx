import { View, Text, Pressable } from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import styles from '../styles/ToDo';

const ToDo = ({title, description, check, id}) => {
  function checkingTask() {
    firestore().collection('task').doc(id).update({check: !check});
  }

  return (
    <View style={styles.taskContainer}>
      <Pressable  onPress={() => checkingTask()} style={styles.checkButton}>
        <Text style={check ? styles.checkText : styles.uncheckText}>
          {check ? '✓' : ' '}
        </Text>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <Pressable  onPress={() => checkingTask()} style={styles.trashButton}>
        <Text style={styles.checkText}>
          ✗
        </Text>
      </Pressable>
    </View>
  )
}

export default ToDo;
