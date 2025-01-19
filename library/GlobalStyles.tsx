"use client";
import { defaultTheme } from "./theme/defaultTheme";
import { createGlobalStyle } from "styled-components";

interface Breakpoints {
  phone: string;
  tablet: string;
  desktop: string;
}

export const breakpoints: Breakpoints = {
  phone: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const GlobalStyles = createGlobalStyle`
*{

  font-family:${defaultTheme.fonts.fontAktivGroteskExtended};
}
body{
  padding: 0;
  margin: 0;
  font-family: ${defaultTheme.fonts.fontHalyardDisplay};
}

html {
    scroll-snap-type: y proximity;
  }

h1 {
    font-family: ${defaultTheme.fonts.fontNimbusSansCondensed};
}

`;

export default GlobalStyles;
