"use client";
import FullScreenImageContainer from "@/components/FullScreenImage/FullScreenImageContainer";
import PageBuilder from "@/components/PageBuilder";
import homeQuery from "@/library/confluence/homeQuery";
import homeData from "@/library/data/home";
import useGetHomePage from "@/library/hooks/useGetHomePage";

const Page = () => {
  useGetHomePage(homeQuery);
  return (
    <>
      <FullScreenImageContainer />
      <PageBuilder data={homeData} />;
    </>
  );
};

export default Page;
