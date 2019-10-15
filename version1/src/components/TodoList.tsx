import * as React from 'react';
import TodoItem from './TodoItem';
interface Props {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            todos={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
