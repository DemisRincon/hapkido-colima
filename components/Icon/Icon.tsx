import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaPerson } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface IconProps {
  iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
  switch (iconName) {
    case "FaPerson":
      return <FaPerson />;
    case "GoLocation":
      return <GoLocation />;
    case "BiPhone":
      return <BiPhone />;
    case "FiMail":
      return <FiMail />;
    default:
      return null;
  }
};

export default Icon;
