import {Score} from "./types";

const api = {
  sound: {
    fetch: () =>
      new Promise((resolve) => {
        const isEnabled = window.localStorage.getItem("pokeguess:sound");

        return resolve(isEnabled === "true");
      }),
    update: (isEnabled) =>
      new Promise((resolve) => {
        window.localStorage.setItem("pokeguess:sound", isEnabled);

        return resolve();
      }),
  },
  scores: {
    fetch: (): Promise<Score[]> =>
      new Promise((resolve, reject) => {
        const scores = window.localStorage.getItem("pokeguess:scores");

        try {
          resolve(JSON.parse(scores) || []);
        } catch (error) {
          reject(error);
        }
      }),
    update: (scores: Score[]) =>
      new Promise((resolve) => {
        window.localStorage.setItem("pokeguess:scores", JSON.stringify(scores));

        return resolve();
      }),
  },
};

export default api;
