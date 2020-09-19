import React from "react";
import styled from "@emotion/styled";

import {useGuess, useStatus} from "../hooks";

import Button from "~/ui/controls/Button";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
  }
`;

const FinishedScreen: React.FC = () => {
  const {guesses} = useGuess();
  const {play, seeHighScores} = useStatus();

  return (
    <Container>
      <h1>Pokémon naming game</h1>
      <h4>You guessed {guesses.length} out of 151</h4>
      <Button type="warning" onClick={play}>
        Play again
      </Button>
      <Button type="primary" onClick={seeHighScores}>
        See high scores
      </Button>
    </Container>
  );
};

export default FinishedScreen;
