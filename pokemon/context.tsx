import React from "react";

import {Pokemon} from "./types";
import api from "./api";
import LoadingScreen from "./screens/Loading";

interface Context {
  state: {
    pokemon: Pokemon[];
  };
}

const PokemonContext = React.createContext({} as Context);

const PokemonProvider = ({children}) => {
  const [pokemon, setPokemon] = React.useState<Pokemon[]>([]);
  const [status, setStatus] = React.useState<"PENDING" | "RESOLVED">("PENDING");

  React.useEffect(() => {
    api.fetch().then((pokemon) => {
      setPokemon(pokemon);
      setStatus("RESOLVED");
    });
  }, []);

  const state = {
    pokemon,
  };

  if (status === "PENDING") return <LoadingScreen />;

  return <PokemonContext.Provider value={{state}}>{children}</PokemonContext.Provider>;
};

export {PokemonContext as default, PokemonProvider as Provider};
