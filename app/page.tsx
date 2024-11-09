import { BlueCard } from "@/components/cards/BlueCard";
import { Slider } from "@/components/slider/Slider";
import { VisionSection } from "@/components/ourvision/VisionSection";
import Realiser from "@/components/realisation/Realisation";
import LogoCarousel from "@/components/logoSlider/LogoSlider";

export default function Home() {
 
  return (
    <>
     <Slider />
    <h2 className="text-[#00fefb] text-center mx-auto text-4xl font-bold p-4 mt-4">Zenith Digit</h2>
    <p className="text-white w-5/6 mx-auto">Chez Zenith Digit, nous mettons tout en œuvre pour propulser les entreprises vers de nouveaux horizons grâce à des solutions digitales innovantes et personnalisées. Que ce soit pour améliorer votre visibilité, optimiser vos processus ou toucher de nouveaux marchés, notre équipe passionnée est à vos côtés à chaque étape.</p>
    {/* <Cards /> */}
    <div className="border-b-4 border-[#00fefb] pb-20">
    <BlueCard/>
    </div>
    <VisionSection />
    <Realiser />
    <LogoCarousel />
    </>
  );
}
