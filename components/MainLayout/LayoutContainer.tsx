"use client";
import { ReactNode } from "react";
import LayoutView from "./LayoutView";
import useGetNavigation from "@/library/hooks/useGetNavigation";
import navigationQuery from "@/library/confluence/navigationQuery";

interface LayoutContainerProps {
  children: ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  useGetNavigation(navigationQuery);
  return <LayoutView>{children}</LayoutView>;
};

export default LayoutContainer;
