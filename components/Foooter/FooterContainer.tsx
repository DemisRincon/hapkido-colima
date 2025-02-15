import React from "react";
import FooterView from "./FooterView";
import { useSelector } from "react-redux";
import { NavigatorState } from "@/redux/navigatorReducer";

export interface FooterLink {
  text?: string;
  icon?: string;
  image?: string;
}

const FooterContainer: React.FC = () => {
  const { bottomMessage, footerData, imageUrl } = useSelector(
    (state: { navigator: NavigatorState }) => state.navigator
  );

  const footerLinks: FooterLink[][] = [
    Array.isArray(footerData[0]) ? footerData[0] : [],
    [{ image: imageUrl }],
    Array.isArray(footerData[1]) ? footerData[1] : [],
  ];

  return <FooterView footerLinks={footerLinks} bottomMessage={bottomMessage} />;
};

export default FooterContainer;
