"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";
import styled from "styled-components";
import LetterBanner from "../cells/LetterBanner";
import WrapperFadeOnView from "../WrapperFadeOnView";

export interface MapsProps {
  title: string;
  url?: string;
}

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_SECRET_KEY || "",
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: 19.287423703445896,
    lng: -103.73035115582559,
  },
  zoom: 18,
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Map = styled.div`
  height: 500px;
  width: 500px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
  cursor: pointer;
`;

const Maps: React.FC<MapsProps> = ({ title, url }) => {
  useEffect(() => {
    loader.importLibrary("marker").then(({ Marker }) => {
      loader.importLibrary("maps").then(({ Map, InfoWindow }) => {
        const mapElement = document.getElementById("map");
        if (mapElement) {
          const map = new Map(mapElement, mapOptions);
          const marker = new Marker({
            position: mapOptions.center,
            title: "Hapkido Defensa Personal",
            map: map,
          });

          const infoWindow = new InfoWindow({
            content:
              "<div style><h5>Hapkido Defensa Personal</h5><p>Almolonia 99-2do piso, Villas Bugambilias, 28979 Cdad. de Villa de Álvarez, Col.</p></div>",
          });
          infoWindow.open(map, marker);

          marker.addListener("click", () => {
            infoWindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          });
        } else {
          console.error("Map element not found");
        }
      });
    });
  }, []);

  return (
    <Container>
      <LetterBanner title={title} fontSize="h3" bgcolor="white" />
      <WrapperFadeOnView>
        <Map id="map" />
      </WrapperFadeOnView>
      <WrapperFadeOnView>
        <Button onClick={() => (window.location.href = url)}>LLEVAME</Button>
      </WrapperFadeOnView>
    </Container>
  );
};

export default Maps;
