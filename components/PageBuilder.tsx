import { PageProps } from "@/library/data/types";
import { Fragment } from "react";
import FullScreenImage, {
  FullScreenImageProps,
} from "./organism/FullScreenImage";
import InfiniteCarousel, {
  InfiniteCarouselProps,
} from "./organism/InfiniteCarousel";
import SectionBanner, { SectionBannerProps } from "./organism/SectionBanner";
import Facebook, { FacebookProps } from "./organism/Facebook";
import LetterBanner, { LetterBannerProps } from "./cells/LetterBanner";
import Article, { ArticleProps } from "./organism/Article";
import Grid, { GridProps } from "./organism/Grid";
import Maps, { MapsProps } from "./organism/Maps";
import SectionSideImage, {
  SectionSideImageProps,
} from "./organism/SectionSideImage";
const PageBuilder: React.FC<PageProps> = ({ data }) => {
  const components = data.map(({ type, ...rest }, index) => {
    switch (type) {
      case FullScreenImage:
        return (
          <FullScreenImage key={index} {...(rest as FullScreenImageProps)} />
        );
      case InfiniteCarousel:
        return (
          <InfiniteCarousel key={index} {...(rest as InfiniteCarouselProps)} />
        );
      case SectionBanner:
        return <SectionBanner key={index} {...(rest as SectionBannerProps)} />;
      case Facebook:
        return <Facebook key={index} {...(rest as FacebookProps)} />;
      case LetterBanner:
        return <LetterBanner key={index} {...(rest as LetterBannerProps)} />;
      case Article:
        return <Article key={index} {...(rest as ArticleProps)} />;
      case Grid:
        return <Grid key={index} {...(rest as GridProps)} />;
      case Maps:
        return <Maps key={index} {...(rest as MapsProps)} />;
      case SectionSideImage:
        return (
          <SectionSideImage key={index} {...(rest as SectionSideImageProps)} />
        );
    }
  });
  return <Fragment>{components}</Fragment>;
};

export default PageBuilder;
