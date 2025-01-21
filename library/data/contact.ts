"use client";
import Contact from "@/components/organism/Contact";
import { DataStructure } from "./types";
import { FaFacebook } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export const contactData: DataStructure[] = [
  {
    type: Contact,
    title: "Contactanos",
    urls: [
      {
        url: "https://www.facebook.com/hapkidocolima",
        name: "Facebook",
        icon: FaFacebook,
      },
      {
        url: "mailto:hapkido@gmail.com",
        name: "hapkido@gmail.com",
        icon: FiMail,
      },
      {
        url: "tel:+523312345678",
        name: "+523312345678",
        icon: FiPhone,
      },
    ],
  },
];
