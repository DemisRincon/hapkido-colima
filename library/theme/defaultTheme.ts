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
  fontSizes: {
    h1: "5.75rem",
    h2: "2.441rem",
    h3: "1.953rem",
    h4: "1.563rem",
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
