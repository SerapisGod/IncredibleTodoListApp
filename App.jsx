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

function App() {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Text>This app is to be called the "Incredible Todo List App" By Matthew</Text>
      <ScrollView>
        <ToDoList />
        <ToDoForm />
      </ScrollView>
      
    </SafeAreaView>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
});
export default App;
