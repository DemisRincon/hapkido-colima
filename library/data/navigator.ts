import { BiPhone } from "react-icons/bi";

import { FiMail } from "react-icons/fi";
import logo from "@/library/images/logo.png";
import { GoLocation } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";

export const navData = {
  links: [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Nosotros" },
    { href: "/location", label: "Ubicación" },
    { href: "/gallery", label: "Galería" },
    { href: "/contact", label: "Contacto" },
  ],
  footerContent: {
    content: [
      {
        data: [
          {
            text: "Pagina creada por Demis Rincon darmfma@gmail.com",
            icon: FaPerson,
          },
        ],
      },
      {
        data: [
          {
            image: logo.src,
          },
        ],
      },
      {
        data: [
          {
            icon: GoLocation,
            text: "Almolonia 99-2do piso,",
          },
          {
            icon: BiPhone,
            text: "312 111 1111",
          },
          {
            icon: FiMail,
            text: "hapkido@gmail.com",
          },
        ],
      },
    ],
    bottom: "© 2021 Hapkido. Todos los derechos reservados.",
  },
};
