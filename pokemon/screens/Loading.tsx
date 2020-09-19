import React from "react";
import styled from "@emotion/styled";

import Spinner from "~/ui/feedback/Spinner";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default LoadingScreen;
