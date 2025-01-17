import { Fragment } from "react";
import School from "./school";
import FreeClass from "./freeClass";
import Testimonials from "./testimonials";
import Facebook from "./facebook";
import Home from "./home";
const Page = () => {
  return (
    <Fragment>
      <Home />
      <School />
      <FreeClass />
      <Facebook />
      <Testimonials />
    </Fragment>
  );
};

export default Page;
