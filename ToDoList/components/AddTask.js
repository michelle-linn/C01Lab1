import React, { useState, } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (title.trim() !== '') {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                placeholder="Enter new task"
                value={title}
                onChangeText={(text) => setTitle(text)}
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;