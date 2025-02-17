"use client";
import ButtonsScreen from "@/components/ButtonsScreen";
import useGetPageData, { Pages } from "@/lib/hooks/useGetPageData";
import { DataType } from "@/lib/redux/initialStates";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";

interface RootState {
  contact: {
    isLoading: boolean;
    data: DataType[];
  };
}

const Page = () => {
  useGetPageData(Pages.CONTACT);
  const {
    data: [contactButtons],
  } = useSelector((state: RootState) => state.contact);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ButtonsScreen
        title={contactButtons.text}
        buttons={contactButtons.buttons || []}
      />
    </Suspense>
  );
};

export default Page;
