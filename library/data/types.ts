import { FC } from "react";
import { FacebookProps } from "@/components/organism/Facebook";
import { FullScreenImageProps } from "@/components/organism/FullScreenImage";
import { InfiniteCarouselProps } from "@/components/organism/InfiniteCarousel";
import { SectionBannerProps } from "@/components/organism/SectionBanner";
import { LetterBannerProps } from "@/components/cells/LetterBanner";

export interface PageProps {
  data: DataStructure[];
}

export type DataStructure =
  | (FullScreenImageProps & { type: FC<FullScreenImageProps> })
  | (InfiniteCarouselProps & { type: FC<InfiniteCarouselProps> })
  | (SectionBannerProps & { type: FC<SectionBannerProps> })
  | (FacebookProps & { type: FC<FacebookProps> })
  | (LetterBannerProps & { type: FC<LetterBannerProps> });
