'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next{
        height: 100%;
    }

    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Pxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export default GlobalStyles
