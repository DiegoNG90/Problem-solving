import TodoList from './components/TodoList/TodoList';
import withLoading from './patterns/HoC/withLoading';
import withHover from './patterns/HoC/withDocumentHover';

const TodoListWithLoadingAndHover = withHover(
  withLoading(TodoList, 'https://jsonplaceholder.typicode.com/posts'),
  'todo-list',
  'app'
);

function App() {
  return (
    <>
      <>
        <h1>CON HOC</h1>
        <TodoListWithLoadingAndHover
          style={{ backgroundColor: 'red', color: '#fff' }}
        />
      </>
    </>
  );
}

export default App;
