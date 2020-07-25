import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface Props {
  task: Task;
  index: number;
}

const TaskStyles = styled.li`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 2px 3px ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
  background: ${(props) => props.theme.colors.background};
`;

const Task: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskStyles
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
