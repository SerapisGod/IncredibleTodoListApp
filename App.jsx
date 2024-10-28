import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react'; 
import globalStyles from './styles';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }



  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Incredible Todo List App: By Matthew
      </Text>
      <ScrollView>
        <ToDoList tasks={tasks} deleteTask={deleteTask} />
        <ToDoForm addTask={addTask} />
      </ScrollView>
    </SafeAreaView>
  );
    
}
export default App;
