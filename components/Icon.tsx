import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaFacebook, FaPerson } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface IconProps {
  iconName: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ iconName, style }) => {
  switch (iconName) {
    case "FaPerson":
      return <FaPerson style={style} />;
    case "GoLocation":
      return <GoLocation style={style} />;
    case "BiPhone":
      return <BiPhone style={style} />;
    case "FiMail":
      return <FiMail style={style} />;
    case "FaFacebook":
      return <FaFacebook style={style} />;
    default:
      return null;
  }
};

export default Icon;
