interface Task {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

interface InitialData {
  [task: string]: Task;
}

interface InitialData2 {
  tasks: {
    "task-1": Task;
    "task-2": Task;
    "task-3": Task;
    "task-4": Task;
  };
  columns: {
    "column-1": Column;
  };
  columnOrder: string[];
}
