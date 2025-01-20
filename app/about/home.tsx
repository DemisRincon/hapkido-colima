"use client";

import SectionBanner from "@/components/SectionBanner";
import SectionSideImage from "@/components/SectionSideImage";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import image from "@/library/images/hapkido.png";
import masterImage from "@/library/images/master.jpg";
import data from "./data.json";
import { Separator } from "@/components/styled";

const Home = () => {
  return (
    <>
      <WrapperFadeOnView>
        <SectionSideImage title={data.section2.title} image={image.src} />
      </WrapperFadeOnView>
      <Separator />
      <WrapperFadeOnView threshold={0.7}>
        <SectionSideImage
          title={data.section3.title}
          image={masterImage.src}
          $roundedimage={true}
          $column={true}
          color="white"
        />
      </WrapperFadeOnView>
      <WrapperFadeOnView threshold={0.5}>
        <SectionBanner content={data.section3.content} color="white" />
      </WrapperFadeOnView>
    </>
  );
};

export default Home;
