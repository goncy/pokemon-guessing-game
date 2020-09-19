import React from "react";
import {Global, css} from "@emotion/core";
import styled from "@emotion/styled";

import Footer from "~/app/components/Footer";
import Actions from "~/app/components/Actions";
import {Provider as PokemonProvider} from "~/pokemon/context";
import {Provider as AppProvider} from "~/app/context";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function PokeGuess({Component, pageProps}) {
  return (
    <>
      <Global
        styles={css`
          @import "https://unpkg.com/nes.css@2.3.0/css/nes.min.css";
          @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Press Start 2P", cursive;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <PokemonProvider>
        <AppProvider>
          <Container>
            <Actions />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </AppProvider>
      </PokemonProvider>
    </>
  );
}

export default PokeGuess;
