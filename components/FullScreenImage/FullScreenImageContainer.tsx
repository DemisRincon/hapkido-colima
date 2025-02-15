import React from "react";
import FullScreenImageView from "./FullScreenImageView";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/pageReducer";
const FullScreenImageContainer = () => {
  const { HeroBackgroundImage } = useSelector(
    (state: { page: RootState }) => state.page.pages
  );
  return (
    <FullScreenImageView
      image={HeroBackgroundImage?.image.url ?? ""}
      text={HeroBackgroundImage?.text}
    />
  );
};

export default FullScreenImageContainer;
