"use client";
import { ReactNode } from "react";
import LayoutView from "./LayoutView";

interface LayoutContainerProps {
  children: ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return <LayoutView>{children}</LayoutView>;
};

export default LayoutContainer;
