"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import React from "react";
import { defaultTheme } from "../themes/defaultTheme";

interface GlobalThemeWrapperProps {
  children: React.ReactNode;
}

const GlobalThemeWrapper: React.FC<GlobalThemeWrapperProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeWrapper;
