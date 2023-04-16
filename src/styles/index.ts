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
