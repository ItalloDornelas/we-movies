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
            --color-text: #FFFFFF;
            --color-infos: #999999;
            --color-buttons: #009EDD
        }
    body{
        background: var(--default-color);
        color: var(--color-text)
    }   
    body,input, button{
        font-family: "Open Sans", serif;
        font-size: 1rem;
    } 
    h1,h2,h3,h4,h5,h6{
        font-family: "Open Sans", monospace;
        font-weight: 700;
    }
    button{
        cursor: pointer;
        background: var(--blue);
        color: var(--color-text)
    }
    a{
        text-decoration: none;
        color: var(--color-text)
    }
`;
