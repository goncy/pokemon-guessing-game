import React from "react";
import styled from "@emotion/styled";

import {useStatus, useScores} from "../hooks";

import Button from "~/ui/controls/Button";
import List from "~/ui/listing/List";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
  }
`;

const HisgScoresScreen: React.FC = () => {
  const {play} = useStatus();
  const scores = useScores();

  return (
    <Container>
      <h1>Pokémon naming game</h1>
      <List>
        {[...scores]
          .sort((a, b) => b.score - a.score)
          .map((score) => (
            <li key={score.date}>
              {score.score} ({new Date(score.date).toLocaleDateString()})
            </li>
          ))}
      </List>
      <Button type="warning" onClick={play}>
        Start game
      </Button>
    </Container>
  );
};

export default HisgScoresScreen;
