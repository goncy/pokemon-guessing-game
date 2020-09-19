import React from "react";

import {Score} from "./types";
import api from "./api";

import {Pokemon} from "~/pokemon/types";
import {usePokemon} from "~/pokemon/hooks";

interface Context {
  state: {
    status: "INIT" | "PLAYING" | "FINISHED" | "HIGH_SCORES";
    hasSound: boolean;
    guesses: Pokemon[];
    scores: Score[];
  };
  actions: {
    play: VoidFunction;
    seeHighScores: VoidFunction;
    endGame: VoidFunction;
    toggleSound: (hasSound: Context["state"]["hasSound"]) => void;
    guess: (name: string) => void;
  };
}

const music = process.browser && new Audio();
const AppContext = React.createContext({} as Context);

const AppProvider = ({children}) => {
  const pokemon = usePokemon();
  const [status, setStatus] = React.useState<Context["state"]["status"]>("INIT");
  const [hasSound, setSound] = React.useState<Context["state"]["hasSound"]>(false);
  const [guesses, setGuesses] = React.useState<Context["state"]["guesses"]>([]);
  const [scores, setScores] = React.useState<Context["state"]["scores"]>([]);

  function guess(name: string) {
    const match = pokemon.find((pokemon) => pokemon.name === name);

    if (match && !guesses.some((pokemon) => pokemon.name === name)) {
      setGuesses(guesses.concat(match));
    }
  }

  function play() {
    setMusic("/sounds/battle.mp3");
    setGuesses([]);
    setStatus("PLAYING");
  }

  function seeHighScores() {
    setStatus("HIGH_SCORES");
  }

  function endGame() {
    setMusic("/sounds/finished.mp3");
    setStatus("FINISHED");
    setScores((scores) => scores.concat({date: +new Date(), score: guesses.length}));
  }

  function setMusic(url: string) {
    music.src = url;

    if (hasSound) {
      music.play();
    }
  }

  function toggleSound(isEnabled) {
    setSound(isEnabled);

    if (isEnabled) {
      music.play();
    } else {
      music.pause();
    }
  }

  React.useEffect(() => {
    api.scores.fetch().then(setScores);
    api.sound.fetch().then(setSound);
  }, []);

  React.useEffect(() => {
    api.sound.update(hasSound);
  }, [hasSound]);

  React.useEffect(() => {
    scores.length && api.scores.update(scores);
  }, [scores]);

  const state = {
    status,
    hasSound,
    guesses,
    scores,
  };

  const actions = {
    play,
    seeHighScores,
    endGame,
    toggleSound,
    guess,
  };

  return <AppContext.Provider value={{state, actions}}>{children}</AppContext.Provider>;
};

export {AppContext as default, AppProvider as Provider};
