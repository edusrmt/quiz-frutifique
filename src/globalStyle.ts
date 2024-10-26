import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Rawson;
    src: url('/fonts/rawson-regular.otf');
    font-weight: normal;
  }

  @font-face {
    font-family: Rawson;
    src: url('/fonts/rawson-semi-bold.otf');
    font-weight: 600;
  }

  @font-face {
    font-family: Rawson;
    src: url('/fonts/rawson-bold.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: Rawson;
    src: url('/fonts/rawson-black.otf');
    font-weight: 900; /* Black */
  }

  @font-face {
    font-family: 'Cooper BT';
    src: url('/fonts/cooper-bt-bold.ttf');
    font-weight: bold;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-height: 100dvh;
    background-color: #e6faff;
    color: #191919;
  }

  body, button {
    font-family: Rawson, Helvetica, sans-serif;
  }
`;
