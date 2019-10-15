type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
type AddTodo = (newTodo: string) => void;
type DeleteTodo = (id: string) => void;
type ToggleTodo = (selectedTodo: Todo) => void;
type EditTodo = (id: string, updatedTodo: string) => void;
