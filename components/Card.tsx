"use client";

import styled from "styled-components";

interface CardProps extends ImageProps {
  image: string;
}

interface ImageProps {
  $imagecircular?: boolean;
  width?: number;
  height?: number;
  horizontalmargin?: string;
}

const ImageStyled = styled.img<ImageProps>`
  ${({ horizontalmargin }) =>
    horizontalmargin ? `margin: 0 ${horizontalmargin};` : ""}
  object-fit: cover;
  border-radius: ${({ $imagecircular }) => ($imagecircular ? "50%" : "0")};
`;

const ImageContainer = styled.div`
  margin: 20px auto;
`;

const Card: React.FC<CardProps> = ({
  image,
  $imagecircular,
  width = 500,
  height = 300,
  horizontalmargin,
}) => {
  return (
    <ImageContainer>
      <ImageStyled
        src={image}
        alt="Hapkido"
        width={width}
        height={height}
        $imagecircular={$imagecircular}
        horizontalmargin={horizontalmargin}
      />
    </ImageContainer>
  );
};

export default Card;
