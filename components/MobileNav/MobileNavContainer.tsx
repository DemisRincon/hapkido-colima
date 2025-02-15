import React from "react";
import MobileNav from "./MobileNavView";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobileNavOpen } from "@/redux/navigatorReducer";

interface MenuContainerSelector {
  navigator: { isMobileNavOpen: boolean };
}

const MenuContainer = () => {
  const dispatch = useDispatch();

  const isMobileNavOpen = useSelector(
    (state: MenuContainerSelector) => state.navigator.isMobileNavOpen
  );

  const toggleMobileNav = () => {
    dispatch(setIsMobileNavOpen(!isMobileNavOpen));
  };

  return (
    <MobileNav
      toggleMobileNav={toggleMobileNav}
      isMobileNavOpen={isMobileNavOpen}
    />
  );
};

export default MenuContainer;
