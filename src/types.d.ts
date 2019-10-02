type Todo = {
  text: string;
  completed: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
type DeleteTodo = (text: string) => void;
