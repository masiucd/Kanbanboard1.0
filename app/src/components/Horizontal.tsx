import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import { TaskList, Wrapper } from "./styled/elements";
import Task from "./Task";

interface Props {
  column: Column;
  tasks: Task[];
}

const Horizontal: React.FC<Props> = ({ column, tasks }) => {
  return (
    <Wrapper width='70%'>
      <Droppable droppableId={column.id} direction='horizontal'>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isFlex
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Wrapper>
  );
};
export default Horizontal;
