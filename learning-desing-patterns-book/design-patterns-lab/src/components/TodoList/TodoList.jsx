import PropTypes from 'prop-types';

const TodoList = ({ data, ...props }) => {
  console.log('props from TodoList', props);

  return (
    <>
      {data?.map((todo) => {
        return (
          <section className="todo-list" key={todo?.id} {...props}>
            <p>{todo.title}</p>
            <p>{props.isDocumentHovered && 'HOVER!'}</p>
          </section>
        );
      })}
    </>
  );
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
  ),
  style: PropTypes.shape({}),
  isDocumentHovered: PropTypes.bool,
};

export default TodoList;
