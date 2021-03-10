import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font: normal 400 16px Lato, sans-serif
}

p, h1, h2, h3, h4, h5, h6 {
  word-break: break-all;
  word-wrap: break-word;
}
`
