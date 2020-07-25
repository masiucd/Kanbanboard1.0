import * as React from "react";
import styled from "styled-components";

interface Props {
  task: Task;
}

const TaskStyles = styled.li`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 2px 3px ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
`;

const Task: React.FC<Props> = ({ task }) => {
  return <TaskStyles>{task.content}</TaskStyles>;
};
export default Task;
