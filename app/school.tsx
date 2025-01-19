"use client";
import InfiniteCarouselMotion from "@/components/InfiniteCarousel";
import { useState, useEffect } from "react";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import hap11 from "@/library/images/hap11.jpg";
import hap4 from "@/library/images/hap4.jpg";
import hap6 from "@/library/images/hap6.jpg";
// aqui va de titulo escuela y poner el carrusel de imagenes happ11 hap4 hap6

const images = [hap11.src, hap4.src, hap6.src];

const School = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <WrapperFadeOnView>
      Escuela
      <InfiniteCarouselMotion images={images} />
    </WrapperFadeOnView>
  );
};

export default School;
