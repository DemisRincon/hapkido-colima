import { PageProps } from "@/library/data/types";
import { Fragment } from "react";

const PageBuilder: React.FC<PageProps> = ({ data }) => {
  const components = data.map(
    ({ type: Component, text, title, images, ...rest }, index) => {
      return (
        <Component
          key={index}
          images={images ?? []}
          text={text ?? []}
          title={title ?? ""}
          {...rest}
        />
      );
    }
  );
  return <Fragment>{components}</Fragment>;
};

export default PageBuilder;
