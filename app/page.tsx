"use client";

import React, { Suspense, lazy, useMemo } from "react";
import { useSelector } from "react-redux";
import useGetPageData, { Pages } from "@/lib/hooks/useGetPageData";
import { RootState, DataType } from "@/lib/redux/store";

const FullScreenImage = lazy(() => import("@/components/FullScreenImage"));
const InfiniteCarousel = lazy(() => import("@/components/InfiniteCarousel"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const LetterBanner = lazy(() => import("@/components/LetterBanner"));
const Facebook = lazy(() => import("@/components/Facebook"));

const Page: React.FC = () => {
  useGetPageData(Pages.HOME);

  const data = useSelector((state: RootState) => state.home.data);
  const [
    fullScreenImageData,
    infiniteCarouselData,
    sectionBannerData,
    testimonialsData,
  ] = data;

  const memoizedFullScreenImageData = useMemo(
    () => fullScreenImageData,
    [fullScreenImageData]
  );
  const memoizedInfiniteCarouselData = useMemo(
    () => infiniteCarouselData,
    [infiniteCarouselData]
  );
  const memoizedSectionBannerData = useMemo(
    () => sectionBannerData,
    [sectionBannerData]
  );
  const memoizedTestimonialsData = useMemo(
    () => testimonialsData,
    [testimonialsData]
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FullScreenImage
        image={memoizedFullScreenImageData.image.url}
        text={memoizedFullScreenImageData.text}
      />
      <InfiniteCarousel
        images={memoizedInfiniteCarouselData.imagesCollection?.items || []}
        title={memoizedInfiniteCarouselData.text ?? ""}
      />
      <LetterBanner title={memoizedSectionBannerData.text} fontSize="h3" />
      <Facebook title="Siguenos en facebook" />
      <Testimonials
        testimonials={memoizedTestimonialsData.testimonials || []}
        title={memoizedTestimonialsData.text}
      />
    </Suspense>
  );
};

export default React.memo(Page);
