"use client";
import ImagesGrid from "@/components/ImagesGrid";
import useGetPageData, { Pages } from "@/lib/hooks/useGetPageData";
import { DataType } from "@/lib/redux/initialStates";
import { Suspense } from "react";
import { useSelector } from "react-redux";

interface RootState {
  gallery: {
    isLoading: boolean;
    data: DataType[];
  };
}

const Page = () => {
  useGetPageData(Pages.GALLERY);
  const {
    data: [galleryImagesGrid],
  } = useSelector((state: RootState) => state.gallery);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {galleryImagesGrid.imagesCollection?.items.length && (
        <ImagesGrid
          images={galleryImagesGrid?.imagesCollection?.items || []}
          name={galleryImagesGrid?.name}
          columns="1fr 1fr 1fr"
        />
      )}
    </Suspense>
  );
};

export default Page;
