import { DataStructure } from "./types";
import Maps from "@/components/organism/Maps";
import Grid from "@/components/organism/Grid";
import img1 from "@/library/images/location/1.jpg";
import img2 from "@/library/images/location/2.jpg";
import img3 from "@/library/images/location/3.jpg";
import img4 from "@/library/images/location/4.jpg";
import img5 from "@/library/images/location/5.jpg";
import img6 from "@/library/images/location/6.jpg";
import img7 from "@/library/images/location/7.jpg";
import img8 from "@/library/images/location/8.jpg";
import img9 from "@/library/images/location/9.jpg";
import img10 from "@/library/images/location/10.jpg";
import img11 from "@/library/images/location/11.jpg";
import img12 from "@/library/images/location/12.jpg";
import img13 from "@/library/images/location/13.jpg";
import img14 from "@/library/images/location/14.jpg";

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
    images: [
      img1.src,
      img2.src,
      img3.src,
      img4.src,
      img5.src,
      img6.src,
      img7.src,
      img8.src,
      img9.src,
      img10.src,
      img11.src,
      img12.src,
      img13.src,
      img14.src,
    ],
  },
];
