import React from "react";
import "./App.css";
import Column from "./components/Column";
import Layout from "./components/layout";
import { AppWrapper, Grid } from "./components/styled/Wrappers";
import { initialData } from "./utils/initial.data";
import { DragDropContext, DragUpdate, DropResult } from "react-beautiful-dnd";
import Modal from "./components/modal";

function App() {
  const [state, setState] = React.useState(initialData);
  const [on, setOn] = React.useState<boolean>(false);

  const { columns, tasks, columnOrder } = state;

  const handleDragEnd = (result: DropResult) => {
    // where to go   current data for given row   unique ID
    // where to go  what to move  and ID to be able to have a drink :D
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

    // column start
    const start = state.columns[source.droppableId];
    // what column to drop to
    const finish = state.columns[destination.droppableId];

    // If we move to the same column then we don't need to do anything new
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
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
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
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
          <>
            <Grid>
              {columnOrder.map((columnId) => {
                const column = columns[columnId];
                const tasksData = column.taskIds.map(
                  (taskId: string) => tasks[taskId],
                );
                return (
                  <Column key={column.id} column={column} tasks={tasksData} />
                );
              })}
            </Grid>
          </>
        </DragDropContext>
        <Modal on={on} setOn={setOn} />
        <button onClick={() => setOn(!on)}>add Task</button>
      </AppWrapper>
    </Layout>
  );
}

export default App;
