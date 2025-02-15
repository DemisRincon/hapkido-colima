import React from "react";
import InfiniteCarouselView from "./InfiniteCarouselView";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/pageReducer";

const InfiniteCarouselContainer = () => {
  const {
    Carousel: {
      text,
      imagesCollection: { items: Carousel },
    },
  } = useSelector((state: { page: RootState }) => state.page.pages);

  return <InfiniteCarouselView images={Carousel} title={text} />;
};

export default InfiniteCarouselContainer;
