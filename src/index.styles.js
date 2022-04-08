import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
 *,
 *::before,
 *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Lato', sans-serif;
 }
`