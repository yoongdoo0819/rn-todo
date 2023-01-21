import EmptyList from '../components/EmptyList';
import List from '../components/List';
import InputFAB from '../components/InputFAB';

const ListScreen = () => {
  const todos = [];
  //   const todos = [
  //     { id: 1, task: 'React Native 1', isDone: false },
  //     { id: 2, task: 'React Native 2', isDone: true },
  //     { id: 3, task: 'React Native 3', isDone: false },
  //     { id: 4, task: 'React Native 4', isDone: true },
  //     { id: 5, task: 'React Native 5', isDone: false },
  //   ];

  return (
    <>
      {todos.length ? <List data={todos}></List> : <EmptyList></EmptyList>}
      <InputFAB></InputFAB>
    </>
  );
};

export default ListScreen;
