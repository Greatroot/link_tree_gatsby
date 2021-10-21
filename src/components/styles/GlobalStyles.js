import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    //* {
    //    font-family: 'Roberto', sans-serif;
    //    margin: 0;
    //    padding: 0;
    //    box-sizing: border-box;
    //}

    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    :root {
      --light-bg: #F8F1D5;
      --blue: #64CBDC;
      --deep-dark: #403F4C;
      --white: white;
      --dark: #292929;
    }

    html {
      font-size: 10px;
      font-family: 'Josefin Slab', sans-serif;
      background-color: var(--light-bg);
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    img, svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button { /* Remove if I don't use it */
      outline: none;
    }

    .container {
      //max-width: 1200px;
      //width: 90%;
      //margin: 0 auto;
    }
    
    /* TODO: Implement Smooth Scrollbar??? */
    
`