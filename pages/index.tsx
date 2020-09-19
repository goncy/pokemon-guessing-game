import React from "react";

import InitScreen from "~/app/screens/Init";
import PlayingScreen from "~/app/screens/Playing";
import FinishedScreen from "~/app/screens/Finished";
import HighScoresScreen from "~/app/screens/HighScores";
import {useStatus} from "~/app/hooks";

export default function IndexRoute() {
  const {status} = useStatus();

  if (status === "INIT") {
    return <InitScreen />;
  }

  if (status === "PLAYING") {
    return <PlayingScreen />;
  }

  if (status === "FINISHED") {
    return <FinishedScreen />;
  }

  if (status === "HIGH_SCORES") {
    return <HighScoresScreen />;
  }

  return null;
}
