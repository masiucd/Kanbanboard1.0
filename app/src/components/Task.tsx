import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface Props {
  task: Task;
  index: number;
}

interface TaskStylesProps {
  isDragging?: boolean;
}

const TaskStyles = styled.li<TaskStylesProps>`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 2px 3px ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
  background: ${({ theme, isDragging }) =>
    isDragging ? theme.colors.button : theme.colors.background};
  color: ${({ theme, isDragging }) =>
    isDragging ? theme.colors.background : theme.colors.text};
  transition: ${({ theme }) => theme.transition.quickTransition};
`;

const Task: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskStyles
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {task.content}
        </TaskStyles>
      )}
    </Draggable>
  );
};
export default Task;
