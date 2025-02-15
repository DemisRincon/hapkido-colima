import React from "react";
import SectionBannerView from "./SectionBannerView";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/pageReducer";

const SectionBannerContainer = () => {
  const { text } = useSelector(
    (state: { page: RootState }) => state.page.pages.SimpleBanner
  );
  return <SectionBannerView title={text} />;
};

export default SectionBannerContainer;
