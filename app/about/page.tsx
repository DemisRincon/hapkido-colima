import { Fragment } from "react";
import Characteristics from "./characteristics";
import HapkidoForAll from "./hapkidoForAll";
import Home from "./home";
const Page = () => {
  return (
    <Fragment>
      <Home />
      <Characteristics />
      <HapkidoForAll />
    </Fragment>
  );
};

export default Page;
