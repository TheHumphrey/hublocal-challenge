import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(90deg, ${({ theme }) => theme.white} 0%, ${({ theme }) => theme['white-100']} 14.58%);
  }
`