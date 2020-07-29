import styled from "styled-components";

interface WrapperProps {
  width?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 2rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
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

export const Btn = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1.8rem;
  margin: 3rem auto;
  display: block;
  width: 24rem;
  text-transform: capitalize;
  border: 2px solid ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.background};
  font-weight: 700;
  cursor: pointer;
  ${({ theme }) => theme.shadow.elevations[1]};
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:hover {
    ${({ theme }) => theme.shadow.elevations[2]};
    width: 25rem;
  }
`;
