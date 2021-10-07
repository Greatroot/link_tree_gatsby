import { createGlobalStyle } from "styled-components";
import JosefinRegular from '../../assets/fonts/JosefinSlab-Thin.ttf';
import JosefinBold from '../../assets/fonts/JosefinSlab-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'JosefinSlab Thin';
    src: url(${JosefinRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'JosefinSlab Bold';
    src: url(${JosefinBold});
    font-style: normal;
  }
  
  html {
    font-family: 'JosefinSlab Thin';
    color: var(--white);
  }
  
  * {
    font-family: 'JosefinSlab Thin';
    color: var(--white);
  }
  
  h1, h2 {
    font-family: 'JosefinSlab Bold';
  }
`;

export default Typography;