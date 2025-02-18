"use client";
import ButtonsScreen from "@/components/ButtonsScreen";
import useGetContactPageData from "@/lib/hooks/useGetContactPageData";
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
  useGetContactPageData();
  const {
    data: [contactButtons],
  } = useSelector((state: RootState) => state.contact);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {contactButtons && (
        <ButtonsScreen
          title={contactButtons.name}
          buttons={contactButtons?.buttons || []}
        />
      )}
    </Suspense>
  );
};

export default Page;
