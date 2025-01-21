"use client";
import PageBuilder from "@/components/PageBuilder";
import { galleryData } from "@/library/data/gallery";

const Page = () => {
  return <PageBuilder data={galleryData} />;
};

export default Page;
