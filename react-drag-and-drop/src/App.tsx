import React from "react";
import "./App.css";
import Column from "./components/Column";
import Layout from "./components/layout";
import { AppWrapper } from "./components/styled/Wrappers";
import { initialData, result } from "./utils/initial.data";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [state, setState] = React.useState(initialData);
  const { columns, tasks, columnOrder } = state;

  const handleDragEnd = (result: Result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = columns[source.droppableId];
    // const newTaskIds = Array.from(column.taskIds);
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);

    // setState((prev) => ({
    //   ...prev,
    //   columns: {
    //     ...columns,
    //     [newColumn.id]: newColumn,
    //   },
    // }));

    // setState(newState);
  };

  return (
    <Layout>
      <AppWrapper>
        <DragDropContext onDragEnd={() => handleDragEnd(result)}>
          {columnOrder.map((columnId) => {
            const column = columns[columnId];
            const tasksData = column.taskIds.map(
              (taskId: string) => tasks[taskId],
            );
            return <Column key={column.id} column={column} tasks={tasksData} />;
          })}
        </DragDropContext>
      </AppWrapper>
    </Layout>
  );
}

export default App;
