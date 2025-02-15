"use client";
import FacebookContainer from "@/components/Facebook/FacebookContainer";
import FullScreenImageContainer from "@/components/FullScreenImage/FullScreenImageContainer";
import InfiniteCarouselContainer from "@/components/InfiniteCarousel/InfiniteCarouselContainer";
import SectionBannerContainer from "@/components/SectionBanner/SectionBannerContainer";
import homeQuery from "@/library/confluence/homeQuery";
import useGetHomePage from "@/library/hooks/useGetHomePage";

const Page = () => {
  useGetHomePage(homeQuery);
  return (
    <>
      <FullScreenImageContainer />
      <InfiniteCarouselContainer />
      <SectionBannerContainer />
      <FacebookContainer />
    </>
  );
};

export default Page;
