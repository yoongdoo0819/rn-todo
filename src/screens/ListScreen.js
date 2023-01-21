import EmptyList from '../components/EmptyList';
import List from '../components/List';
import InputFAB from '../components/InputFAB';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const ListScreen = () => {
  const [todos, setTodos] = useState([
    // { id: '1', task: 'task1', isDone: false },
    // { id: '2', task: 'task2', isDone: false },
    // { id: '3', task: 'task3', isDone: false },
    // { id: '4', task: 'task4', isDone: false },
    // { id: '5', task: 'task5', isDone: false },
    // { id: '6', task: 'task6', isDone: false },
    // { id: '7', task: 'task7', isDone: false },
    // { id: '8', task: 'task8', isDone: false },
    // { id: '9', task: 'task9', isDone: false },
    // { id: '10', task: 'task10', isDone: false },
    // { id: '11', task: 'task11', isDone: false },
    // { id: '12', task: 'task12', isDone: false },
  ]);
  const [isBottom, setIsBottom] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const { getItem, setItem } = useAsyncStorage('todos');

  const save = async (data) => {
    try {
      await setItem(JSON.stringify(data));
      setTodos(data);
    } catch (e) {
      Alert.alert('저장 실패');
    }
  };

  const load = async () => {
    try {
      const data = await getItem();
      const todos = JSON.parse(data || '[]');
      setTodos(todos);
    } catch (e) {
      Alert.alert('불러오기 실패');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onInsert = (task) => {
    const id = nanoid();
    const newTask = { id, task, isDone: false };
    save([newTask, ...todos]);
    //setTodos((prev) => [newTask, ...prev]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    save(newTodos);
  };

  const onToggle = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    save(newTodos);
  };

  return (
    <View style={{ paddingBottom: bottom, flex: 1 }}>
      {todos.length ? (
        <List
          data={todos}
          setIsBottom={setIsBottom}
          onDelete={onDelete}
          onToggle={onToggle}
        ></List>
      ) : (
        <EmptyList></EmptyList>
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom}></InputFAB>
    </View>
  );
};

export default ListScreen;
