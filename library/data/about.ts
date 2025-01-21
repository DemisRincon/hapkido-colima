import SectionSideImage from "@/components/organism/SectionSideImage";
import { DataStructure } from "./types";
import logo from "@/library/images/hapkido.png";
import LetterBanner from "@/components/cells/LetterBanner";
export const aboutData: DataStructure[] = [
  { type: SectionSideImage, title: "Historia del hapkido", images: [logo.src] },
  { type: LetterBanner, title: "CARACTERÍSTICAS DEL HAPKIDO", fontSize: "h3" },
];
