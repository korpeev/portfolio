import React, { FC, ReactElement } from "react";
import { SiTelegram, SiGmail, SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface IconSelector {
  id: string;
}
const IconSelector = ({ id = "gmail" }: IconSelector) => {
  switch (id) {
    case "telegram":
      return <SiTelegram size={25} color="#0088cc" />;
    case "instagram":
      return <FaInstagram size={25} fill="#bc1888" />;
    case "gmail":
      return <SiGmail size={25} color="red" />;
    case "github":
      return <SiGithub size={25} />;
    case "demo":
      return <CgWebsite size={25} color="#fff" />;
    default:
      return null;
  }
};

export default IconSelector;
