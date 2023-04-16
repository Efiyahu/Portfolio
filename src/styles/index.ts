import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    #root {
        height: inherit;
    }

    *,*::before, *::after{
    box-sizing: inherit; 
    }
    body {
        margin: 0;
        background: #292929;
        font-family: 'Open Sans', sans-serif;

        p,h1,h2,h3,h4,h5 , h6 {
            padding: 0;
            margin: 0;
        } 
  color: #eee;

    }

    a{
        &:visited {
            color: inherit;
        }
    }
    ul{
        list-style: none;
    }
`;

export default GlobalStyle;
