import React from "react";
import styled from "@emotion/styled";
import {keyframes} from "@emotion/core";

const tilt = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  10% {
    transform: rotateZ(10deg);
  }

  30% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(0deg);
  }
`;

const Container = styled.i`
  transform-origin: center bottom;
  animation: ${tilt} 2s infinite;
`;

const Spinner: React.FC = () => {
  return <Container className="nes-pokeball" />;
};

export default Spinner;
