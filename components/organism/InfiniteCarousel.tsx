"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import WrapperFadeOnView from "../WrapperFadeOnView";
import Card from "../cells/Card";

export interface InfiniteCarouselProps {
  images: string[];
  title: string;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 10rem 0;
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

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  title,
}) => {
  return (
    <MainContainer>
      <WrapperFadeOnView>
        <h2>{title}</h2>
      </WrapperFadeOnView>
      <WrapperFadeOnView>
        <Container>
          <Carrusel
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {images.map((image, index) => (
              <Card key={index} image={image} horizontalmargin="10px" />
            ))}
          </Carrusel>
          <Carrusel
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {images.map((image, index) => (
              <Card key={index} image={image} horizontalmargin="10px" />
            ))}
          </Carrusel>
          <Carrusel
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {images.map((image, index) => (
              <Card key={index} image={image} horizontalmargin="10px" />
            ))}
          </Carrusel>
        </Container>
      </WrapperFadeOnView>
    </MainContainer>
  );
};

export default InfiniteCarousel;
