"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface InfiniteCarouselProps {
  images: string[];
}

interface CardProps {
  image: string;
}

const ImageContainer = styled.div`
  margin: 0 0 0 20px;
`;

const Carrusel = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 500px;
  margin: 50px 0;
`;

const CarouselImage = styled.img`
  width: 700px;
  height: 100%;
  object-fit: cover;
`;

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <ImageContainer>
      <CarouselImage src={image} alt="Hapkido" />
    </ImageContainer>
  );
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
  return (
    <Carrusel>
      {[...images, ...images].map((image, index) => (
        <Card key={index} image={image} />
      ))}
    </Carrusel>
  );
};

export default InfiniteCarousel;
