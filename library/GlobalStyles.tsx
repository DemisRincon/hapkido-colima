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
}

html {
    scroll-snap-type: y proximity;
  }

h1 {
  font-family: ${defaultTheme.fonts.hfonts};
  font-size: ${defaultTheme.fontSizes.h1};
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


h2 {
  font-family: ${defaultTheme.fonts.hfonts};
  font-size: ${defaultTheme.fontSizes.h2};
  font-weight: 800;
  margin: 0.5em 0;
  text-transform: uppercase;
  text-align: center;
  strong {
      color: white;
      text-shadow: 0 0 0 3px ${defaultTheme.colors.black};
      @supports (-webkit-text-stroke: 1px ${defaultTheme.colors.black}) {
        -webkit-text-fill-color: ${defaultTheme.colors.white};
        -webkit-text-stroke: 3px ${defaultTheme.colors.black};
    }
  }
}

h3 {
  font-family: ${defaultTheme.fonts.hfonts};
  font-size: ${defaultTheme.fontSizes.h3};
  font-weight: 700;
  margin: 0.5em 0;
  text-transform: uppercase;
  text-align: center;
  strong {
      color: white;
      text-shadow: 0 0 0 3px ${defaultTheme.colors.black};
      @supports (-webkit-text-stroke: 1px ${defaultTheme.colors.black}) {
        -webkit-text-fill-color: ${defaultTheme.colors.white};
        -webkit-text-stroke: 3px ${defaultTheme.colors.black};
    }
  }
}


h4 {
  font-family: ${defaultTheme.fonts.hfonts};
  font-size: ${defaultTheme.fontSizes.h4};
  font-weight: 600;
  margin: 0.5em 0;
  text-transform: uppercase;
  text-align: center;
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
