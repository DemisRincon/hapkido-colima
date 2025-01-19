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
  font-size: 6.75rem;
  font-weight: 900;
  margin: 0.5em 0;
  text-transform: uppercase;
  strong {
      color: white;
      text-shadow: 0 0 0 3px ${defaultTheme.colors.black};
      @supports (-webkit-text-stroke: 1px ${defaultTheme.colors.black}) {
        -webkit-text-fill-color: ${defaultTheme.colors.white};
        -webkit-text-stroke: 3px ${defaultTheme.colors.black};
    }
  }
}

`;

export default GlobalStyles;
