import React from "react";
import HeaderView from "./HeaderView";
import useViewportHeightTransitionPercentage from "@/library/hooks/useViewportHeightTransitionPercentage";
import { useScroll, useTransform } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { NavigatorState, setIsMobileNavOpen } from "@/redux/navigatorReducer";

const HeaderContainer = () => {
  const { imageUrl, nav, isMobileNavOpen } = useSelector(
    (state: { navigator: NavigatorState }) => state.navigator
  );

  const dispatch = useDispatch();
  const { scrollYProgress } = useScroll();
  const percentageTransition = useViewportHeightTransitionPercentage();
  const y = useTransform(scrollYProgress, [0, percentageTransition], [0, -4]);
  const opacity = useTransform(
    scrollYProgress,
    [0, percentageTransition],
    [0, 1]
  );

  const toggleNav = () => {
    dispatch(setIsMobileNavOpen(!isMobileNavOpen));
  };

  return (
    <HeaderView
      y={y}
      opacity={opacity}
      logo={imageUrl}
      nav={nav}
      toggleNav={toggleNav}
    />
  );
};

export default HeaderContainer;
