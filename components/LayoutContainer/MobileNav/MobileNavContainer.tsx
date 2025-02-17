import React from "react";
import MobileNav from "./MobileNavView";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobileNavOpen } from "@/lib/redux/navigatorReducer";

interface MenuContainerSelector {
  navigator: {
    isMobileNavOpen: boolean;
    nav: {
      link: string;
      name: string;
    }[];
  };
}

const MenuContainer = () => {
  const dispatch = useDispatch();
  const { nav, isMobileNavOpen } = useSelector(
    (state: MenuContainerSelector) => state.navigator
  );

  const toggleMobileNav = () => {
    dispatch(setIsMobileNavOpen(!isMobileNavOpen));
  };

  return (
    <MobileNav
      toggleMobileNav={toggleMobileNav}
      isMobileNavOpen={isMobileNavOpen}
      nav={nav}
    />
  );
};

export default MenuContainer;
