import React from "react";
import styled from "@emotion/styled";

import {useStatus, useGuess} from "../hooks";

import Button from "~/ui/controls/Button";
import TextField from "~/ui/inputs/TextField";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
  }
`;

const Guesses = styled.nav`
  display: flex;

  & + & {
    margin-left: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayingScreen: React.FC = () => {
  const {guess, guesses} = useGuess();
  const {endGame} = useStatus();
  const [value, setValue] = React.useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    guess(value);
    setValue("");
  }

  return (
    <Container>
      <h1>Pokémon naming game</h1>
      <Guesses>
        {guesses.map((pokemon) => (
          <img key={pokemon.id} alt={pokemon.name} src={pokemon.image} />
        ))}
      </Guesses>
      <Form onSubmit={handleSubmit}>
        <TextField value={value} onChange={setValue} />
        <Button type="error" onClick={endGame}>
          I'm done
        </Button>
      </Form>
    </Container>
  );
};

export default PlayingScreen;
