import styled from "styled-components";
import { H2 } from "./styled";
import WrapperFadeOnView from "./WrapperFadeOnView";
import Image from "next/image";

export interface SectionSideImageProps {
  title: string;
  image: string;
  bgcolor?: string;
  $column?: boolean;
  $roundedimage?: boolean;
}

const Container = styled.div<{ $bgcolor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme, $bgcolor = "white" }) =>
    theme.colors[$bgcolor]};
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
const HeadImage = styled(Image)<{ $roundedimage?: boolean; $column?: boolean }>`
  border-radius: ${({ $roundedimage }) => ($roundedimage ? "50%" : "0")};
  margin-top: ${({ $column }) => ($column ? "3rem" : "0")};
  width: auto;
  height: auto;

  object-fit: contain;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 500px;
    width: 500px;
  }
`;

const SectionSideImage: React.FC<SectionSideImageProps> = ({
  title,
  image,
  bgcolor,
  $column = false,
  $roundedimage = false,
}) => {
  return (
    <Container $bgcolor={bgcolor}>
      <WrapperFadeOnView>
        <HeadSection $column={$column}>
          <H2>{title}</H2>
          {image && (
            <HeadImage
              $roundedimage={$roundedimage}
              $column={$column}
              src={image}
              alt={title}
              width={500}
              height={500}
              priority
            />
          )}
        </HeadSection>
      </WrapperFadeOnView>
    </Container>
  );
};

export default SectionSideImage;
