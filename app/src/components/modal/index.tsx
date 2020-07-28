import * as React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

interface Props {
  on: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledModal = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledModalBody = styled(animated.div)`
  position: relative;
  width: 60%;
  height: 60%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #close {
    position: absolute;
    top: 0;
    right: 2rem;
    font-size: 5rem;
    cursor: pointer;
  }
`;

const Modal: React.FC<Props> = ({ on, setOn }) => {
  const { x } = useSpring({
    x: on ? 0 : 100,
  });

  return (
    <StyledModal
      style={{
        transform: x.interpolate((x) => `translate3d(0,${x * 1}%,0)`),
      }}>
      <StyledModalBody>
        <h1>Modal body</h1>
        <div id='close' onClick={() => setOn(!on)}>
          ⤫
        </div>
      </StyledModalBody>
    </StyledModal>
  );
};
export default Modal;
