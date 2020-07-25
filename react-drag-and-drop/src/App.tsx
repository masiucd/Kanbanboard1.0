import React from "react";
import "./App.css";
import Column from "./components/Column";
import Layout from "./components/layout";
import { AppWrapper } from "./components/styled/Wrappers";
import initialData from "./utils/initial.data";

function App() {
  const [state, setState] = React.useState(initialData);
  const { columns, tasks, columnOrder } = state;
  return (
    <Layout>
      <AppWrapper>
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const tasksData = column.taskIds.map(
            (taskId: string) => tasks[taskId],
          );
          return <Column key={column.id} column={column} tasks={tasksData} />;
        })}
      </AppWrapper>
    </Layout>
  );
}

export default App;
