import { DataStructure } from "./types";
import Maps from "@/components/organism/Maps";
import Grid from "@/components/organism/Grid";
export const locationData: DataStructure[] = [
  {
    type: Maps,
    title: "Ubicación",
    url: "https://maps.app.goo.gl/CWnUEt6vGwjWYSRP7",
  },
  {
    type: Grid,
    title: "Un vistazo a nuestras instalaciones",
    columns: "1fr 1fr 1fr",
    photoheight: "300px",
    photowidth: "400px",
    images: [],
  },
];
