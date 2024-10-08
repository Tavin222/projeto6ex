import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFEBD9',
  brancoSecond: '#FFF8F2',
  fundoCard: '#fff',
  rosa: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`
