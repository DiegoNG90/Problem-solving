import PropTypes from 'prop-types';

const TodoList = ({ data, ...props }) => {
  console.log('DATA from TodoList', data);
  console.log('props from TodoList', props);
  return (
    <>
      {data?.map((todo) => {
        return (
          <div key={todo?.id} {...props}>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </>
  );
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
  ),
};

export default TodoList;
