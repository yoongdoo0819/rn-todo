import EmptyList from '../components/EmptyList';
import List from '../components/List';
import InputFAB from '../components/InputFAB';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const ListScreen = () => {
  const [todos, setTodos] = useState([]);
  const onInsert = (task) => {
    const id = nanoid();
    const newTask = { id, task, isDone: false };
    setTodos((prev) => [newTask, ...prev]);
  };

  return (
    <>
      {todos.length ? <List data={todos}></List> : <EmptyList></EmptyList>}
      <InputFAB onInsert={onInsert}></InputFAB>
    </>
  );
};

export default ListScreen;
