import { FC } from "react";
import { FacebookProps } from "@/components/organism/Facebook";
import { FullScreenImageProps } from "@/components/organism/FullScreenImage";
import { InfiniteCarouselProps } from "@/components/organism/InfiniteCarousel";
import { SectionBannerProps } from "@/components/organism/SectionBanner";
import { LetterBannerProps } from "@/components/cells/LetterBanner";
import { ArticleProps } from "@/components/organism/Article";
import { GridProps } from "@/components/organism/Grid";
import { MapsProps } from "@/components/organism/Maps";
import { ContactProps } from "@/components/organism/Contact";
import { SectionSideImageProps } from "@/components/organism/SectionSideImage";

export interface PageProps {
  data: DataStructure[];
}

export type DataStructure =
  | (FullScreenImageProps & { type: FC<FullScreenImageProps> })
  | (InfiniteCarouselProps & { type: FC<InfiniteCarouselProps> })
  | (SectionBannerProps & { type: FC<SectionBannerProps> })
  | (FacebookProps & { type: FC<FacebookProps> })
  | (LetterBannerProps & { type: FC<LetterBannerProps> })
  | (ArticleProps & { type: FC<ArticleProps> })
  | (GridProps & { type: FC<GridProps> })
  | (MapsProps & { type: FC<MapsProps> })
  | (SectionSideImageProps & { type: FC<SectionSideImageProps> })
  | (ContactProps & { type: FC<ContactProps> });
