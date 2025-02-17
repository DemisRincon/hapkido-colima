export type DataType = ArticleInterface &
  CarouselInterface &
  HeroBackgroundImageInterface &
  HeroSideImageHeadInterface &
  SimpleBannerInterface &
  TestimonialsInterface &
  SectionBannerInterface &
  ImagesGridInterface &
  ButtonScreenInterface;

interface HeroBackgroundImageInterface {
  __typename: string;
  name: string;
  text: string;
  image: { url: string };
}

interface CarouselInterface {
  __typename: string;
  text: string;
  imagesCollection: { items: { url: string }[] };
}

interface SimpleBannerInterface {
  __typename: string;
  text: string;
}

interface TestimonialsInterface {
  __typename: string;
  text: string;
  testimonials: { title: string; text: string }[];
}

interface HeroSideImageHeadInterface {
  __typename: string;
  text: string;
  image: { url: string };
}

interface ArticleInterface {
  __typename: string;
  name: string;
  imageCircular: boolean;
  imageWidth: string;
  content: string[];
  image: { url: string };
}

interface SectionBannerInterface {
  __typename: string;
  name: string;
  content: string;
}

interface ImagesGridInterface {
  __typename: string;
  name: string;
  imagesCollection: { items: { url: string }[] };
}

interface ButtonScreenInterface {
  __typename: string;
  name: string;
  buttons: { url: string; name: string; icon: string }[];
}

const HeroBackgroundImage: HeroBackgroundImageInterface = {
  __typename: "HeroBackgroundImage",
  name: "Home",
  text: "",
  image: { url: "" },
};

const Carousel: CarouselInterface = {
  __typename: "Carousel",
  text: "",
  imagesCollection: { items: [{ url: "" }] },
};

const SimpleBanner: SimpleBannerInterface = {
  __typename: "SimpleBanner",
  text: "",
};

const Testimonials: TestimonialsInterface = {
  __typename: "Testimonials",
  text: "",
  testimonials: [],
};

const HeroSideImageHead: HeroSideImageHeadInterface = {
  __typename: "HeroSideImageHead",
  text: "",
  image: { url: "" },
};

const Article: ArticleInterface = {
  __typename: "Article",
  name: "",
  imageCircular: false,
  imageWidth: "",
  content: [],
  image: { url: "" },
};

const SectionBanner: SectionBannerInterface = {
  __typename: "SectionBanner",
  name: "",
  content: "",
};

const ImagesGrid: ImagesGridInterface = {
  __typename: "ImagesGrid",
  name: "",
  imagesCollection: { items: [{ url: "" }] },
};

const ButtonScreen: ButtonScreenInterface = {
  __typename: "ButtonScreen",
  name: "",
  buttons: [{ url: "", name: "", icon: "" }],
};

export const homeInitialState = {
  isLoading: false,
  error: "",
  data: [HeroBackgroundImage, Carousel, SimpleBanner, Testimonials],
};

export const aboutInitialState = {
  isLoading: false,
  error: "",
  data: [
    HeroSideImageHead,
    Article,
    SimpleBanner,
    SectionBanner,
    SectionBanner,
    SectionBanner,
    ImagesGrid,
  ],
};

export const locationInitialState = {
  isLoading: false,
  error: "",
  data: [ImagesGrid],
};

export const galleryInitialState = {
  isLoading: false,
  error: "",
  data: [ImagesGrid],
};

export const contactInitialState = {
  isLoading: false,
  error: "",
  data: [ButtonScreen],
};
