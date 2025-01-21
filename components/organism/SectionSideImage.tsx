import styled from "styled-components";
import { H2 } from "../cells/styled";

export interface SectionSideImageProps {
  title: string;
  images: string[];
  bgColor?: string;
  $column?: boolean;
  $roundedimage?: boolean;
}

const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme, bgColor = "white" }) => theme.colors[bgColor]};
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

const SectionSideImage: React.FC<SectionSideImageProps> = ({
  title,
  images,
  bgColor,
  $column = false,
  $roundedimage = false,
}) => {
  return (
    <Container bgColor={bgColor}>
      <HeadSection $column={$column}>
        <H2>{title}</H2>
        <HeadImage
          $roundedimage={$roundedimage}
          $column={$column}
          src={images[0]}
          alt={title}
        />
      </HeadSection>
    </Container>
  );
};

export default SectionSideImage;
