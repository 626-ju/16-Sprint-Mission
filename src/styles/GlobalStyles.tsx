'use client';

import { theme } from './theme';
import { Global, css } from '@emotion/react';

function GlobalStyles() {
  return <Global styles={[resetCss, globalCss]} />;
}

export default GlobalStyles;

const resetCss = css`
  /* 리셋 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  svg {
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    border-radius: 0;
    cursor: pointer;
  }
`;

const globalCss = css`
  body {
    background-color: ${theme.colors.gray50};
  }
`;
