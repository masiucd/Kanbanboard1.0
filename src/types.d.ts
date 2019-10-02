type Todo = {
  text: string;
  completed: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
