type TaskId = string;

type Task = {
  id: TaskId;
  content: string;
};

type ColumnId = string;

type Column = {
  id: ColumnId;
  title: string;
  taskIds: TaskId[];
};

type InitialData = {
  tasks: Record<TaskId, Task>;
  columns: Record<ColumnId, Column>;
  columnOrder: ColumnId[];
};

interface Result {
  draggableId: string;
  type: string;
  reason: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  };
}
