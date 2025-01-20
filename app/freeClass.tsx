import SectionBanner from "@/components/SectionBanner";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";

//letrero ven a tomar un clase de prueba para niños y adultos ...   Te esperamos
const FreeClass = () => {
  return (
    <WrapperFadeOnView threshold={0.8}>
      <SectionBanner title="Ven a tomar una clase de prueba para niños y adultos... Te esperamos" />
    </WrapperFadeOnView>
  );
};

export default FreeClass;
