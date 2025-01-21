"use client";
import { Fragment } from "react";
import Characteristics from "./characteristics";
import HapkidoForAll from "./hapkidoForAll";
import PageBuilder from "@/components/PageBuilder";
import { aboutData } from "@/library/data/about";

const Page = () => {
  return (
    <Fragment>
      <PageBuilder data={aboutData} />
      <Characteristics />
      <HapkidoForAll />
    </Fragment>
  );
};

export default Page;
