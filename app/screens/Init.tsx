import React from "react";
import styled from "@emotion/styled";

import {useStatus} from "../hooks";

import Button from "~/ui/controls/Button";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
  }
`;

const InitScreen: React.FC = () => {
  const {play, seeHighScores} = useStatus();

  return (
    <Container>
      <h1>Pokémon naming game</h1>
      <Button type="warning" onClick={play}>
        Start game
      </Button>
      <Button type="primary" onClick={seeHighScores}>
        See high scores
      </Button>
    </Container>
  );
};

export default InitScreen;
