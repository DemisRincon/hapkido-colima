"use client";
import styled from "styled-components";

interface CardProps {
  image: string;
}
const CarouselImage = styled.img`
  width: 500px;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  margin: 0 0 0 20px;
`;

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <ImageContainer>
      <CarouselImage src={image} alt="Hapkido" />
    </ImageContainer>
  );
};

export default Card;
