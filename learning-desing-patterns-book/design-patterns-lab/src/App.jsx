import TodoList from './components/TodoList/TodoList';
import withLoading from './patterns/HoC/HoC';

const TodoListWithLoading = withLoading(
  TodoList,
  'https://jsonplaceholder.typicode.com/posts'
);
function App() {
  return (
    <>
      <h1>SIN HOC</h1>
      <TodoList
        data={[
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          },
        ]}
      />
      <h1>CON HOC</h1>
      <TodoListWithLoading style={{ backgroundColor: 'red', color: '#fff' }} />
    </>
  );
}

export default App;
