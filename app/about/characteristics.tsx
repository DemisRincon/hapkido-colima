import SectionBanner from "@/components/SectionBanner";
import data from "./data.json";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";

const Characteristics = () => {
  return (
    <>
      <WrapperFadeOnView>
        <SectionBanner
          title={data.section5.title}
          content={data.section5.content}
          color="white"
        />{" "}
      </WrapperFadeOnView>
      <WrapperFadeOnView>
        <SectionBanner
          title={data.section6.title}
          content={data.section6.content}
          color="white"
        />
      </WrapperFadeOnView>
      <WrapperFadeOnView>
        <SectionBanner
          title={data.section7.title}
          content={data.section7.content}
          color="white"
        />
      </WrapperFadeOnView>
    </>
  );
};

export default Characteristics;
