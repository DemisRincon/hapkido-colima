export interface Theme {
  colors: {
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
    fontAktivGroteskExtended: string;
    fontHalyardDisplay: string;
    fontNimbusSansCondensed: string;
  };
  sizing: {
    pageSizerWidth: string;
    pageSizerWidthLarge: string;
    pageSizerWidthBig: string;
    pageSizerWidthMedium: string;
    pageSizerWidthNarrow: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    darkBlue: "#2A3659",
    lightBlue: "#117DBF",
    grey: "#A6A5A4",
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
    fontAktivGroteskExtended: "aktiv-grotesk-extended",
    fontHalyardDisplay: "halyard-display",
    fontNimbusSansCondensed: "nimbus-sans-condensed",
  },
  sizing: {
    pageSizerWidth: "1230px",
    pageSizerWidthLarge: "1440px",
    pageSizerWidthBig: "1266px",
    pageSizerWidthMedium: "1066px",
    pageSizerWidthNarrow: "856px",
  },
};
