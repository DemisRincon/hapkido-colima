"use client";

import React, { useState, useEffect } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

interface StyledComponentsRegistryProps {
  children: React.ReactNode;
}

const StyledComponentsRegistry: React.FC<StyledComponentsRegistryProps> = ({
  children,
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  useEffect(() => {
    return () => {
      styledComponentsStyleSheet.seal();
    };
  }, [styledComponentsStyleSheet]);

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
