import React from "react";
import "./App.css";
import Column from "./components/Column";
import Layout from "./components/layout";
import { AppWrapper } from "./components/styled/Wrappers";
import initialData from "./utils/initial.data";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [state, setState] = React.useState(initialData);
  const { columns, tasks, columnOrder } = state;

  const handleDragEnd = (result: any) => {};

  return (
    <Layout>
      <DragDropContext onDragEnd={handleDragEnd}>
        <AppWrapper>
          {columnOrder.map((columnId) => {
            const column = columns[columnId];
            const tasksData = column.taskIds.map(
              (taskId: string) => tasks[taskId],
            );
            return <Column key={column.id} column={column} tasks={tasksData} />;
          })}
        </AppWrapper>
      </DragDropContext>
    </Layout>
  );
}

export default App;
