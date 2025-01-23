"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { defaultTheme } from "./theme/defaultTheme";
import StyledComponentsRegistry from "./registry";

interface GlobalThemeWrapperProps {
  children: React.ReactNode;
}

const GlobalThemeWrapper: React.FC<GlobalThemeWrapperProps> = ({
  children,
}) => {
  const [theme] = useLocalStorage("theme", defaultTheme);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default GlobalThemeWrapper;
