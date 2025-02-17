"use client";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import LetterBanner from "@/components/LetterBanner";
import useGetPageData, { Pages } from "@/lib/hooks/useGetPageData";
import SectionSideImage from "@/components/SectionSideImage";
import Article from "@/components/Article";
import { DataType } from "@/lib/redux/initialStates";
import SectionBanner from "@/components/SectionBanner";
import ImagesGrid from "@/components/ImagesGrid";

interface RootState {
  about: {
    isLoading: boolean;
    data: DataType[];
  };
}

const Page = () => {
  useGetPageData(Pages.ABOUT);
  const {
    data: [
      HeroSideTopData,
      ArticleData,
      SectionBannerData,
      SectionBanner1,
      SectionBanner2,
      SectionBanner3,
      ImgGrid,
    ],
  } = useSelector((state: RootState) => state.about);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SectionSideImage
        image={HeroSideTopData.image.url}
        title={HeroSideTopData.text}
        bgcolor="grey"
      />
      <Article
        name={ArticleData.name}
        imagecircular={ArticleData.imageCircular}
        imagewidth={ArticleData.imageWidth}
        content={ArticleData.content}
        image={ArticleData.image.url}
      />
      <LetterBanner title={SectionBannerData.text} fontSize="h3" />
      <SectionBanner
        name={SectionBanner1.name}
        content={SectionBanner1.content}
        bgcolor="white"
      />
      <SectionBanner
        name={SectionBanner2.name}
        content={SectionBanner2.content}
        bgcolor="white"
      />
      <SectionBanner
        name={SectionBanner3.name}
        content={SectionBanner3.content}
        bgcolor="white"
      />
      <ImagesGrid
        images={ImgGrid.imagesCollection?.items}
        name={ImgGrid.name ?? ""}
      />
    </Suspense>
  );
};

export default Page;
