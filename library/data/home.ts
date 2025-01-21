import FullScreenImage from "@/components/organism/FullScreenImage";
import hap9 from "@/library/images/hap9.jpg";
import hap11 from "@/library/images/hap11.jpg";
import hap4 from "@/library/images/hap4.jpg";
import hap6 from "@/library/images/hap6.jpg";
import { DataStructure } from "@/library/data/types";
import InfiniteCarousel from "@/components/organism/InfiniteCarousel";
import SectionBanner from "@/components/organism/SectionBanner";
import Facebook from "@/components/organism/Facebook";

const homeData: DataStructure[] = [
  {
    type: FullScreenImage,
    images: [hap9.src],
    text: ["Hapkido", "Colima"],
    title: "Hapkido Colima",
  },
  {
    type: InfiniteCarousel,
    title: "Escuela",
    images: [hap11.src, hap4.src, hap6.src],
  },
  {
    type: SectionBanner,
    title:
      "Ven a tomar una clase de prueba para niños y adultos... Te esperamos",
  },
  {
    type: Facebook,
    title: "Siguenos en Facebook",
  },
];

export default homeData;
