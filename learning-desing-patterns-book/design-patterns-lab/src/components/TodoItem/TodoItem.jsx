/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
const TodoItem = ({ todo, isDocumentHovered, styles }) => {
  const [isThisHovered, setIsThisHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mountedRef = ref.current;

    const handleMouseEnter = () => {
      setIsThisHovered(true);
    };

    const handleMouseLeave = () => {
      setIsThisHovered(false);
    };

    if (mountedRef) {
      mountedRef.addEventListener('mouseenter', handleMouseEnter);
      mountedRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (mountedRef) {
        mountedRef.removeEventListener('mouseenter', handleMouseEnter);
        mountedRef.addEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isThisHovered]);

  return (
    <section className="todo-list" style={styles} ref={ref}>
      <p>{todo.title}</p>
      <p>{isDocumentHovered && 'HOVER!'}</p>
      <p style={{ background: 'blue' }}>
        {isThisHovered && 'THIS ONE ONLY IS HOVERED!'}
      </p>
    </section>
  );
};

export default TodoItem;
