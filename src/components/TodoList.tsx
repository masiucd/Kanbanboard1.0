import * as React from 'react';
import TodoItem from './TodoItem';
interface Props {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  let a;
  return (
    <>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.text} todos={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
