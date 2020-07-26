import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

interface Props {
  column: Column;
  tasks: Task[];
}

const Wrapper = styled.div`
  padding: 2rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 2px 3px ${({ theme }) => theme.colors.secondary};
  margin: 1.5rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  min-width: 30rem;
`;

const Title = styled.h3`
  font-size: 6rem;
  padding: 1rem;
`;

interface TaskListProps {
  isDraggingOver?: boolean;
}
const TaskList = styled.ul<TaskListProps>`
  padding: 1rem;
  min-height: 45vh;
  background-color: ${({ theme, isDraggingOver }) =>
    isDraggingOver ? theme.colors.secondary : theme.colors.background};
  transition: ${({ theme }) => theme.transition.quickTransition};
  flex: 1;
`;

const Column: React.FC<Props> = ({ column, tasks }) => {
  return (
    <Wrapper>
      <Title> {column.title} </Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
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
export default Column;
