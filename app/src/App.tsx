import React from "react";
import "./App.css";
import Column from "./components/Column";
import Layout from "./components/layout";
import { AppWrapper } from "./components/styled/Wrappers";
import { initialData } from "./utils/initial.data";
import { DragDropContext, DragUpdate, DropResult } from "react-beautiful-dnd";

function App() {
  const [state, setState] = React.useState(initialData);
  const { columns, tasks, columnOrder } = state;

  const handleDragEnd = (result: DropResult) => {
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

    // setState(newState);

    setState((prev) => ({
      ...prev,
      columns: {
        ...columns,
        [newColumn.id]: newColumn,
      },
    }));

    setState(newState);
  };

  const handleDragUpdate = (update: DragUpdate) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(state.tasks).length
      : 0;

    document.body.style.background = `rgba(0,0,0,${opacity})`;
  };

  const onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };

  return (
    <Layout>
      <AppWrapper>
        <DragDropContext onDragEnd={handleDragEnd}>
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
