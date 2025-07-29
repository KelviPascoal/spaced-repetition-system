import { createGlobalStyle, css } from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${({ theme, removeBg }) => css`

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
    css`
        background-color: ${theme.colors.background.base};
      `}
    }

  ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }


  `}

`
