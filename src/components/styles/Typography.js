import { createGlobalStyle } from "styled-components";
import JosefinRegular from '../../assets/fonts/JosefinSlab-Regular.ttf';
import JosefinBold from '../../assets/fonts/JosefinSlab-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Regular';
    src: url(${JosefinRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'Josefin Bold';
    src: url(${JosefinBold});
    font-style: normal;
  }
  
  html {
    font-family: 'Josefin Regular';
    color: var(--black);
  }
  
  * {
    font-family: 'Josefin Regular';
    color: var(--gray-1);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Josefin Bold';
  }
`;

export default Typography;