import React from "react";
import styled from "@emotion/styled";

const Container = styled.nav`
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Actions: React.FC = () => {
  return <Container>Made with love by goncy (idea from @cassidoo)</Container>;
};

export default Actions;
