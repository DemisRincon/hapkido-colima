import styled from "styled-components";
import { H2 } from "../cells/styled";
import WrapperFadeOnView from "../WrapperFadeOnView";

export interface SectionSideImageProps {
  title: string;
  images: string[];
  bgcolor?: string;
  $column?: boolean;
  $roundedimage?: boolean;
}

const SectionSideImage: React.FC<SectionSideImageProps> = ({
  title,
  images,
  bgcolor,
  $column = false,
  $roundedimage = false,
}) => {
  return (
    <Container bgcolor={bgcolor}>
      <WrapperFadeOnView>
        <HeadSection $column={$column}>
          <H2>{title}</H2>
          <HeadImage
            $roundedimage={$roundedimage}
            $column={$column}
            src={images[0]}
            alt={title}
          />
        </HeadSection>
      </WrapperFadeOnView>
    </Container>
  );
};

const Container = styled.div<{ bgcolor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme, bgcolor = "white" }) => theme.colors[bgcolor]};
`;

const HeadSection = styled.div<{ $column?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: ${(props) => (props.$column ? "column" : "row")};
    justify-content: ${(props) =>
      props.$column ? "flex-start" : "space-around"};
    height: ${(props) => (props.$column ? "auto" : "100vh")};
    margin: 0;
  }
`;

const HeadImage = styled.img.attrs<{
  $roundedimage?: boolean;
  $column?: boolean;
}>(({ $roundedimage, $column }) => ({
  style: {
    borderRadius: $roundedimage ? "50%" : "0",
    marginTop: $column ? "3rem" : "0",
  },
}))`
  max-width: 90%;
  height: auto;
  object-fit: contain;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 500px;
    width: auto;
  }
`;

export default SectionSideImage;
