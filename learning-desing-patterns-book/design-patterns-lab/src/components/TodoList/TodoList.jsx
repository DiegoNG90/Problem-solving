/* eslint-disable react/prop-types */

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ data, ...props }) => {
  const { isDocumentHovered, style: styles } = props;

  return (
    <>
      {data?.map((todo) => {
        return (
          <TodoItem
            key={todo?.id}
            todo={todo}
            isDocumentHovered={isDocumentHovered}
            styles={styles}
          />
        );
      })}
    </>
  );
};

export default TodoList;
