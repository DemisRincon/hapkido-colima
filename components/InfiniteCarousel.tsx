"use client";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface InfiniteCarouselProps {
  images: string[];
  title: string;
}

interface CardProps {
  image: string;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100%;
`;

const Carrusel = styled(motion.div)`
  display: flex;
  width: fit-content;
  height: 300px;
  margin: 50px 0;
  flex-shrink: 0;
`;

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

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  title,
}) => {
  return (
    <MainContainer>
      <h2>{title}</h2>
      <Container>
        <Carrusel
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </Carrusel>
        <Carrusel
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </Carrusel>
        <Carrusel
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </Carrusel>
      </Container>
    </MainContainer>
  );
};

export default InfiniteCarousel;
