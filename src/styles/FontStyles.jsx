import { createGlobalStyle } from "styled-components";
import DDin from "./fonts/D-DIN.otf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'D-DIN';
  src: url(${DDin}) format('opentype');
}
`;

export default FontStyles;
