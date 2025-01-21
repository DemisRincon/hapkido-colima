import { FacebookProps } from "@/components/organism/Facebook";
import { FullScreenImageProps } from "@/components/organism/FullScreenImage";
import { InfiniteCarouselProps } from "@/components/organism/InfiniteCarousel";
import { SectionBannerProps } from "@/components/organism/SectionBanner";
import { FC } from "react";

export interface PageProps {
  data: DataStructure[];
}

export interface DataStructure {
  type:
    | FC<FullScreenImageProps>
    | FC<InfiniteCarouselProps>
    | FC<SectionBannerProps>
    | FC<FacebookProps>;
  images?: string[];
  text?: string[];
  title?: string;
  content?: string[];
  bgColor?: string;
}
