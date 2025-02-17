"use client";

import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import FullScreenImage from "@/components/FullScreenImage";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Testimonials from "@/components/Testimonials";
import LetterBanner from "@/components/LetterBanner";
import useGetPageData, { Pages } from "@/lib/hooks/useGetPageData";
import { DataType } from "@/lib/redux/initialStates";
import Facebook from "@/components/Facebook";

interface RootState {
  home: {
    isLoading: boolean;
    data: DataType[];
  };
}

const Page = () => {
  useGetPageData(Pages.HOME);
  const {
    data: [
      fullScreenImageData,
      infiniteCarouselData,
      sectionBannerData,
      testimonialsData,
    ],
  } = useSelector((state: RootState) => state.home);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FullScreenImage
        image={fullScreenImageData.image.url}
        text={fullScreenImageData.text}
      />
      <InfiniteCarousel
        images={infiniteCarouselData.imagesCollection?.items || []}
        title={infiniteCarouselData.text ?? ""}
      />
      <LetterBanner title={sectionBannerData.text} fontSize="h3" />
      <Facebook title="Siguenos en facebook" />
      <Testimonials
        testimonials={testimonialsData.testimonials || []}
        title={testimonialsData.text}
      />
    </Suspense>
  );
};

export default Page;
