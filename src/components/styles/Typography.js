import { createGlobalStyle } from "styled-components";
import JosefinRegular from '../../assets/fonts/JosefinSlab-Regular.ttf';
import JosefinBold from '../../assets/fonts/JosefinSlab-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'JosefinSlab Regular';
    src: url(${JosefinRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'JosefinSlab Bold';
    src: url(${JosefinBold});
    font-style: normal;
  }
  
  html {
    font-family: 'JosefinSlab Regular';
    color: var(--white);
  }
  
  * {
    font-family: 'JosefinSlab Regular';
    color: var(--white);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'JosefinSlab Bold';
  }
`;

export default Typography;