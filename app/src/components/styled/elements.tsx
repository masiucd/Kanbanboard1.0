import styled from "styled-components";

interface WrapperProps {
  width?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 2rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 2px 3px ${({ theme }) => theme.colors.secondary};
  margin: 1.5rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  /* min-width: 30rem; */
  min-width: ${({ width }) => (width ? width : "30rem")};
`;

export const Title = styled.h3`
  font-size: 6rem;
  padding: 1rem;
`;

interface TaskListProps {
  isDraggingOver?: boolean;
  isFlex?: boolean;
}
export const TaskList = styled.ul<TaskListProps>`
  padding: 1rem;
  min-height: 45vh;
  background-color: ${({ theme, isDraggingOver }) =>
    isDraggingOver ? theme.colors.secondary : theme.colors.background};
  transition: ${({ theme }) => theme.transition.quickTransition};
  flex: 1;
  display: ${({ isFlex }) => (isFlex ? `flex` : "block")};
  align-items: ${({ isFlex }) => isFlex && `center`};
`;
