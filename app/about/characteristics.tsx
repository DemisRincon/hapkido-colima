import SectionBanner from "@/components/SectionBanner";
import data from "./data.json";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Characteristics = () => {
  return (
    <>
      <WrapperFadeOnView>
        <TitleContainer>
          <h2>
            <strong>{data.section4.title}</strong>
          </h2>
        </TitleContainer>
      </WrapperFadeOnView>
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
