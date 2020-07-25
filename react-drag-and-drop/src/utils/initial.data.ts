// interface Task {
//   id: string;
//   content: string;
// }

// type TasksType = {
//   "task-1": Task;
//   "task-2": Task;
//   "task-3": Task;
//   "task-4": Task;
// };

// interface Col {
//   id: string;
//   title: string;
//   taskIds: string[];
// }

// type ColumnsType = {
//   "column-1": Col;
// };

// interface Data {
//   tasks: TasksType;
//   columns: ColumnsType;
//   columnOrder: string[];
// }

interface Data {
  tasks: { [key: string]: any };
  columns: { [key: string]: any };
  columnOrder: string[];
}

const initialData: Data = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },

  columnOrder: ["column-1"],
};

export default initialData;
