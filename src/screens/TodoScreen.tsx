import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Todo } from '../../Todo';

export default function TodoScreen({ navigation }: any) {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const todo = new Todo(Math.random().toString(), text);
    // sama og þetta
    //const todo1 = { id: Math.random().toString(), text: text }
    setTodos((oldTodos): any => [...oldTodos, todo]);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => setTodos(() => todos.filter((elm: any) => elm.id !== item.id))}>
        <Text>Delete item</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Button title='Go to Screen 2' onPress={() => navigation.navigate('Screen 2')} />

        <Text>To do list</Text>

        <TextInput placeholder='Add your todo here' style={styles.textInput} onChangeText={(newText) => setText(newText)} value={text} />

        <Button title='Add todo' onPress={handleAddTodo} />

        <FlatList data={todos} renderItem={renderItem} keyExtractor={(item: any) => item.id} />
      </SafeAreaView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  item: {
    marginBottom: 10,
  },
});
