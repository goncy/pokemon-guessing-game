import React from "react";

import PokemonContext from "./context";

export function usePokemon() {
  const {
    state: {pokemon},
  } = React.useContext(PokemonContext);

  return pokemon;
}
