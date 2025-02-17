"use client";
import ImagesGrid from "@/components/ImagesGrid";
import Maps from "@/components/Maps";
import useGetPageData, { Pages } from "@/lib/hooks/useGetPageData";
import { DataType } from "@/lib/redux/initialStates";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";

interface RootState {
  location: {
    isLoading: boolean;
    data: DataType[];
  };
}

const Page = () => {
  useGetPageData(Pages.LOCATION);
  const {
    data: [locationImagesGallery],
  } = useSelector((state: RootState) => state.location);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Maps title="Ubicación" url={process.env.NEXT_PUBLIC_MAPS || "/"} />
      <ImagesGrid
        images={locationImagesGallery.imagesCollection?.items || []}
        name={locationImagesGallery.name}
        columns="1fr 1fr 1fr"
      />
    </Suspense>
  );
};

export default Page;
