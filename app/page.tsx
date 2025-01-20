"use client";
import { Fragment } from "react";
import School from "./school";
import FreeClass from "./freeClass";
import Facebook from "./facebook";
import Home from "./home";
import { Separator } from "@/components/styled";
const Page = () => {
  return (
    <Fragment>
      <Home />
      <Separator />
      <School />
      <Separator />
      <FreeClass />
      <Facebook />
    </Fragment>
  );
};

export default Page;
