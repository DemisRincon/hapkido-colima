import React from "react";
import styled from "styled-components";

interface SectionSideImageProps {
  title: string;
  image: string;
  $column?: boolean;
  color?: string;
  $roundedimage?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme, color = "grey" }) => theme.colors[color]};
`;

const HeadSection = styled.div<{ $column?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
  justify-content: ${(props) =>
    props.$column ? "flex-start" : "space-around"};
  align-items: center;
  width: 100%;
  height: ${(props) => (props.$column ? "auto" : "100vh")};
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
  height: 500px;
  object-fit: contain;
`;

const SectionSideImage: React.FC<SectionSideImageProps> = ({
  title,
  image,
  $column = false,
  color,
  $roundedimage = false,
}) => {
  return (
    <Container color={color}>
      <HeadSection $column={$column}>
        <h4>{title}</h4>
        <HeadImage
          $roundedimage={$roundedimage}
          $column={$column}
          src={image}
          alt="Hapkido"
        />
      </HeadSection>
    </Container>
  );
};

export default SectionSideImage;
