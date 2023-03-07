import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

    :root{
            --default-color: #2F2E41;
            --white: #FFFFFF;
            --blue: #009EDD
        }
    body{
        background: var(--default-color);
        color: var(--white)
    }   
    body,input, button{
        font-family: "Squada One", serif;
        font-size: 1rem;
    } 
    h1,h2,h3,h4,h5,h6{
        font-family: "Roboto Mono", monospace;
        font-weight: 700;
    }
    button{
        cursor: pointer;
        background: var(--blue);
        color: var(--white)
    }
    a{
        text-decoration: none;
    }
`;
