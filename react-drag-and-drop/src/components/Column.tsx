import * as React from "react";
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
`;

const Title = styled.h3`
  font-size: 6rem;
  padding: 1rem;
`;

const TaskList = styled.ul`
  padding: 1rem;
`;

const Column: React.FC<Props> = ({ column, tasks }) => {
  return (
    <Wrapper>
      <Title> {column.title} </Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Wrapper>
  );
};
export default Column;
