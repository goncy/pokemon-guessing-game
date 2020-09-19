import React from "react";

import AppContext from "./context";

export function useStatus() {
  const {
    state: {status},
    actions: {play, seeHighScores, endGame},
  } = React.useContext(AppContext);

  return {status, play, seeHighScores, endGame};
}

export function useGuess() {
  const {
    state: {guesses},
    actions: {guess},
  } = React.useContext(AppContext);

  return {guesses, guess};
}

export function useScores() {
  const {
    state: {scores},
  } = React.useContext(AppContext);

  return scores;
}

export function useSound() {
  const {
    state: {hasSound},
    actions: {toggleSound},
  } = React.useContext(AppContext);

  return {isEnabled: hasSound, toggle: toggleSound};
}
