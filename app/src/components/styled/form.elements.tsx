import styled from "styled-components";

export const Label = styled.label`
  padding: 3rem;
  margin: 2rem auto;
  display: block;
  width: 80%;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.7rem;
  padding: 0.8rem 1rem;
  font-size: 1.6rem;
  border: 2px solid ${({ theme }) => theme.colors.button};
  ${({ theme }) => theme.shadow.elevations[1]};
  transition: ${({ theme }) => theme.transition.quickTransition};
  outline: 0;
  &:focus {
    ${({ theme }) => theme.shadow.elevations[2]};
  }
`;
