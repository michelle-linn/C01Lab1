import React, { useState, } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ toDos }) => {
    // initialize toDos array by mapping over initial values and putting it in toDos object with an ID and title
    const [toDoItems, setToDos] = useState(toDos.map((name) => ({ id: uuidv4(), title: name})));

    // 'addToDo' takes a 'newTitle' parameter, uses 'setToDos' func that receives previous state ('prevToDos')
    // receiving current prevToDos, next state is: ...prevToDos that copies the current array combined with a new ToDo object
    const addToDo = (newTitle) => {
      const newToDo = {id: uuidv4(), title: newTitle};
      setToDos((prevToDos) => [...prevToDos, newToDo]);
    };

    // 'removeToDo' takes 'id' parameter, uses 'setToDos' to remove the ToDo object matching 'id'
    // receiving current prevToDos, next state is: prevToDos only with objects whose id don't match 'id'
    const removeToDo = (id) => {
      setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
    };

    return (
      <View style={styles.todoListContainer}>
        {toDoItems.map((toDo) => (
          <View key={toDo.id}> 
            <Text style={styles.todoItem}>{toDo.title}</Text>
            <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
          </View>
        ))}
        <AddTask onAddTask={addToDo} />
      </View>
    );
};

ToDoList.defaultProps = {
  toDos: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;
