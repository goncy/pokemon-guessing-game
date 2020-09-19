import React from "react";
import styled from "@emotion/styled";

import {useSound} from "../hooks";

import Button from "~/ui/controls/Button";

const Container = styled.nav`
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Actions: React.FC = () => {
  const {isEnabled, toggle} = useSound();

  return (
    <Container>
      <Button type={isEnabled ? "success" : "warning"} onClick={() => toggle(!isEnabled)}>
        Sound {isEnabled ? "on" : "off"}
      </Button>
    </Container>
  );
};

export default Actions;
