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
`;

const Title = styled.h3`
  font-size: 6rem;
  padding: 1rem;
`;

const TaskList = styled.ul`
  padding: 1rem;
  min-height: 45vh;
`;

const Column: React.FC<Props> = ({ column, tasks }) => {
  return (
    <Wrapper>
      <Title> {column.title} </Title>
      <Droppable droppableId={column.id} type='LIST'>
        {(provided, snapshot) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
          </TaskList>
        )}
      </Droppable>
    </Wrapper>
  );
};
export default Column;
