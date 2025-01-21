"use client";
import PageBuilder from "@/components/PageBuilder";
import { locationData } from "@/library/data/location";
const Page = () => {
  return <PageBuilder data={locationData} />;
};

export default Page;
