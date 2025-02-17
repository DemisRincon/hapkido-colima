import { Inter, Lilita_One } from "next/font/google";

export interface Theme {
  colors: {
    noSoBlack: string;
    darkBlue: string;
    lightBlue: string;
    grey: string;
    bone: string;
    black: string;
    white: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fonts: {
    hfonts: string;
    navLink: string;
    paragraph: string;
    fontAktivGroteskExtended: string;
    fontHalyardDisplay: string;
    fontNimbusSansCondensed: string;
  };
  fontSizes: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    body: string;
    small: string;
  };
  sizing: {
    pageSizerWidth: string;
    pageSizerWidthLarge: string;
    pageSizerWidthBig: string;
    pageSizerWidthMedium: string;
    pageSizerWidthNarrow: string;
  };
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "700"],
  style: ["italic", "normal"],
});

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
});

export const defaultTheme: Theme = {
  colors: {
    noSoBlack: "#333333",
    darkBlue: "#2A3659",
    lightBlue: "#117DBF",
    grey: "#e9e7e4",
    bone: "#F2F2F2",
    black: "#0D0D0D",
    white: "#FFFFFF",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  fonts: {
    hfonts: lilitaOne.style.fontFamily,
    navLink: inter.style.fontFamily,
    paragraph: inter.style.fontFamily,
    fontAktivGroteskExtended: "p22-numismatic, sans-serif",
    fontHalyardDisplay: "p22-numismatic, sans-serif",
    fontNimbusSansCondensed: "p22-numismatic, sans-serif",
  },
  fontSizes: {
    h1: "5.75rem",
    h2: "4rem",
    h3: "3rem",
    h4: "2rem",
    h5: "1.25rem",
    h6: "1rem",
    body: "1rem",
    small: "0.8rem",
  },
  sizing: {
    pageSizerWidth: "1230px",
    pageSizerWidthLarge: "1440px",
    pageSizerWidthBig: "1266px",
    pageSizerWidthMedium: "1066px",
    pageSizerWidthNarrow: "856px",
  },
};
