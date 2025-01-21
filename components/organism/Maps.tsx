"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
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

const Maps = () => {
  useEffect(() => {
    loader.importLibrary("marker").then(({ Marker }) => {
      loader.importLibrary("maps").then(({ Map }) => {
        const mapElement = document.getElementById("map");
        if (mapElement) {
          const map = new Map(mapElement, mapOptions);
          new Marker({
            position: mapOptions.center,
            title: "Hapkido Defensa Personal",
            map: map,
          });
        } else {
          console.error("Map element not found");
        }
      });
    });
  }, []);

  return <div id="map" style={{ height: "100vh" }} />;
};

export default Maps;
