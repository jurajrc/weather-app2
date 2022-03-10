import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 100%;
        overflow-x: hidden;
        background: #fff;
        font-family: 'Barlow', sans-serif;
        overflow-x: hidden;

        .background {
            width: 100%;

            img {
                width: 100%;
                height: auto;
            }
        }
    }

    a {
        text-decoration: none;
        font-family: 'Barlow', sans-serif;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`
export default GlobalStyle