import EmptyList from '../components/EmptyList';
import List from '../components/List';
import InputFAB from '../components/InputFAB';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const ListScreen = () => {
  const [todos, setTodos] = useState([
    { id: '1', task: 'task1', isDone: false },
    { id: '2', task: 'task2', isDone: false },
    { id: '3', task: 'task3', isDone: false },
    { id: '4', task: 'task4', isDone: false },
    { id: '5', task: 'task5', isDone: false },
    { id: '6', task: 'task6', isDone: false },
    { id: '7', task: 'task7', isDone: false },
    { id: '8', task: 'task8', isDone: false },
    { id: '9', task: 'task9', isDone: false },
    { id: '10', task: 'task10', isDone: false },
    { id: '11', task: 'task11', isDone: false },
    { id: '12', task: 'task12', isDone: false },
  ]);
  const [isBottom, setIsBottom] = useState(false);

  const onInsert = (task) => {
    const id = nanoid();
    const newTask = { id, task, isDone: false };
    setTodos((prev) => [newTask, ...prev]);
  };

  return (
    <>
      {todos.length ? (
        <List data={todos} setIsBottom={setIsBottom}></List>
      ) : (
        <EmptyList></EmptyList>
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom}></InputFAB>
    </>
  );
};

export default ListScreen;
