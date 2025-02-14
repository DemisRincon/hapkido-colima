"use client";
import PageBuilder from "@/components/PageBuilder";
import homeData from "@/library/data/home";
import { useSelector } from "react-redux";

const Page = () => {
  const home= useSelector((state) => state.home);
  console.log(home);
  return <PageBuilder data={homeData} />;
};

export default Page;
