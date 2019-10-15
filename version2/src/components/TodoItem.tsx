/* eslint-disable react/prop-types */
import * as React from 'react';
import { toUnicode } from 'punycode';

interface TodoItem {
  todo: Todo;
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
}

const TodoItem: React.FC<TodoItem> = ({
  todo, deleteTodo, toggleTodo, editTodo,
}) => {
  const { id, completed, text } = todo;
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = () => {
    setShow(!show);
  };


  return (
    <>
      <li className={completed ? 'completed' : ''}>
        {show ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            toggle();
          }}
          >
            {' '}
            <input type="text" placeholder={todo.text} value={value} onChange={(e) => setValue(e.target.value)} />
            {' '}
            <button type="submit">👍🏻</button>
          </form>
        ) : (
          <>
            {' '}
            {text}
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(todo)} />
            <span onClick={toggle}>🖌</span>
            <span onClick={() => deleteTodo(id)}>🗑</span>
            {' '}

          </>
        ) }


      </li>
    </>
  );
};
export default TodoItem;
