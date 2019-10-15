/* eslint-disable react/prop-types */
import * as React from 'react';
import TodoItem from './TodoItem';

interface ListProps {
  todosList: Todo[];
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
}

const TaskList: React.FC<ListProps> = ({
  todosList, deleteTodo, toggleTodo, editTodo,
}) => (
  <>
    <ul>
      {todosList.map((todo) => <TodoItem key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} />)}
    </ul>
  </>
);
export default TaskList;
